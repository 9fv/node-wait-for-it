/**
 * This file is part of node-wait-for-it
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * Base error for {WaitForIt}.
 *
 * @class
 */
class WaitForItError extends Error {

  /**
   * Create a new instance of {WaitForItError}.
   *
   * @param args - The arguments.
   * @constructor
   */
  constructor(...args) {
    super(...args);
  }
}

/**
 * Error thrown when formatting of host or formatting of network port cannot be validated.
 *
 * @class
 */
class WaitForItValidationError extends WaitForItError {

  /**
   * Create a new instance of {WaitForItValidationError}.
   *
   * @param args - The arguments.
   * @constructor
   */
  constructor(...args) {
    super(...args);
  }
}

module.exports = {};
module.exports.WaitForItError = WaitForItError;
module.exports.WaitForItValidationError = WaitForItValidationError;