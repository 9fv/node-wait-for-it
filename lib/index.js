/**
 * This file is part of node-wait-for-it
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const {WaitForIt, waitForIt} = require('./wait-for-it');
const {WaitForItError, WaitForItValidationError} = require('./wait-for-it-errors');

module.exports = {};
module.exports.WaitForIt = WaitForIt;
module.exports.waitForIt = waitForIt;
module.exports.WaitForItError = WaitForItError;
module.exports.WaitForItValidationError = WaitForItValidationError;
