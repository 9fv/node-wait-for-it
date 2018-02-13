/**
 * This file is part of node-wait-for-it
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const _ = require('lodash');
const {PortReachable} = require('@9fv.io/is-port-reachable');
const {repeatUntilSuccess} = require('repeat-until-success');

const {WaitForItError} = require('./wait-for-it-errors');


/**
 * Waits until all pairs (host:port) respond.
 *
 * @class
 * @public
 */
class WaitForIt {

  /**
   * Create a new instance of {WaitForIt}.
   *
   * @param args - The arguments.
   * @constructor
   * @public
   */
  constructor(...args) {
    this._timeout = 5000;
    this._delay = 500;
    this._hostPorts = [];
  }

  timeout(value) {
    this._timeout = value;
    return this;
  }

  logger(value) {
    this._logger = value;
    return this;
  }

  /**
   * Add an host and port to reach.
   *
   * @param value
   */
  add(value) {
    if (_.isString(value) === false) {
      throw new WaitForItError(`Unable to add host: ${value}. Parameter must be a type of {string}`);
    }
    this._hostPorts.push(value);
    return this;
  }

  /**
   * Waits until all pairs (host:port) respond.
   *
   * @return {Promise}
   */
  wait() {
    const stack = this._hostPorts.map((hostPort) => {
      return PortReachable.factory(hostPort).try();
    });

    return this.repeatUntilSuccess(() => {
      return Promise.all(stack).then(() => {
        return true;
      }).catch((e) => {
        throw new WaitForItError(e);
      })
    }).run().then((x) => {
      console.log(x);
      return x;
    }).catch((e) => {
      console.log(e);
      throw e;
    });
  }

  /**
   * Repeat a task until succeeds.
   *
   * @param task {Function}
   * @return {RepeatUntilSucess}
   * @private
   */
  repeatUntilSuccess(task) {
    let r = repeatUntilSuccess(task);
    if (this._logger) {
      r = r.logger(this._logger);
    }
    if (this._timeout) {
      r = r.timeout(this._timeout);
    }
    if (this._delay) {
      r = r.delay(this._delay);
    }
    return r;
  }

  /**
   * Factory to create a new instance of {WaitForIt}.
   *
   * @param args
   * @return {WaitForIt}
   */
  static factory(...args) {
    return new WaitForIt(...args);
  }
}

/**
 * A factory function to create a new instance of {WaitForIt}.
 *
 * @param args - The arguments.
 * @return {WaitForIt}
 */
function waitForIt(...args) {
  return WaitForIt.factory(...args);
}

module.exports = {};
module.exports.WaitForIt = WaitForIt;
module.exports.waitForIt = waitForIt;