/**
 * This file is part of node-wait-for-it
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const should = require('should');

const {waitForIt} = require('../lib/wait-for-it');

describe('Test a valid port of valid host ', () => {
  it('should return a {Promise}', () => {
    return (waitForIt().add('www.google.com:80').add('www.yahoo.com:80').wait()).should.be.a.Promise;
  });
  it('should be finally equal to {true}', () => {
    return (waitForIt().add('www.google.com:80').wait()).should.be.finally.equal(true);
  });
});

describe('Test an invalid port of invalid host ', () => {
  it('should return a {Promise}', () => {
    return (waitForIt().add('poulet:80').wait()).should.be.a.Promise;
  });
  it('should throw an {Error}', () => {
    return (waitForIt().add('poulet:80').wait()).should.be.rejected();
  }).timeout(10000);
});


