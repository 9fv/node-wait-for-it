[npm-badge]: https://img.shields.io/npm/v/@9fv.io&#x2F;wait-for-it.svg
[npm-badge-url]: https://www.npmjs.com/package/@9fv.io&#x2F;wait-for-it
[npm-downloads-badge]: https://img.shields.io/npm/dt/@9fv.io&#x2F;wait-for-it.svg
[npm-downloads-url]: https://npmjs.org/package/@9fv.io&#x2F;wait-for-it
[travis-badge]: https://img.shields.io/travis/9fv/node-wait-for-it/v0.1.0-alpha1.svg?label=TravisCI
[travis-badge-url]: https://travis-ci.org/9fv/node-wait-for-it
[circle-badge]: https://circleci.com/gh/9fv/node-wait-for-it/tree/v0.1.0-alpha1.svg?style=svg&circle-token=
[circle-badge-url]: https://circleci.com/gh/9fv/node-wait-for-it/tree/v0.1.0-alpha1
[coveralls-badge]: https://coveralls.io/repos/github/9fv/node-wait-for-it/badge.svg?branch=v0.1.0-alpha1
[coveralls-badge-url]: https://coveralls.io/github/9fv/node-wait-for-it?branch=v0.1.0-alpha1
[codeclimate-badge]: https://img.shields.io/codeclimate/github/9fv/node-wait-for-it.svg
[codeclimate-badge-url]: https://codeclimate.com/github/9fv/node-wait-for-it
[ember-observer-badge]: http://emberobserver.com/badges/node-wait-for-it.svg
[ember-observer-badge-url]: http://emberobserver.com/addons/node-wait-for-it
[license-badge]: https://img.shields.io/npm/l/@9fv.io&#x2F;wait-for-it.svg
[license-badge-url]: LICENSE.md
[dependencies-badge]: https://img.shields.io/david/9fv/node-wait-for-it.svg
[dependencies-badge-url]: https://david-dm.org/9fv/node-wait-for-it
[devDependencies-badge]: https://img.shields.io/david/dev/9fv/node-wait-for-it.svg
[devDependencies-badge-url]: https://david-dm.org/9fv/node-wait-for-it#info=devDependencies
[greenkeeper-badge]: https://badges.greenkeeper.io/9fv/node-wait-for-it.svg
[greenkeeper-badge-url]: https://greenkeeper.io/


node-wait-for-it
====================

Waits until all pairs (host:port) respond.

[![Latest NPM release][npm-badge]][npm-badge-url]
[![NPM Downloads][npm-downloads-badge]][npm-downloads-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]
[![Test Coverage][coveralls-badge]][coveralls-badge-url]
[![Code Climate][codeclimate-badge]][codeclimate-badge-url]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url] 
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper-badge-url]


## Table of Contents

* [Synopsis](#synopsis)
* [Usage](#usage)
* [Installation](#installation)
* [API Reference](#api-reference)
* [Tests](#tests)
  * [Run unit tests](#tests_run-unit-tests)
* [Compatibility](#compatibility)
  * [Node](#compatibility_node)
  * [Browser](#compatibility_browser)
* [Issues](#issues)
* [Contributing](#contributing)
* [Credits](#credits)
* [History](#history)
* [License](#license)

## <a name="synopsis"> Synopsis

Waits until all pairs (host:port) respond.

**Warning!** Work in progress...

## <a name="usage"> Usage

```javascript
   const {waitForIt} = require('@9fv/wait-for-it');

   waitForIt('www.google.com:80').wait();

   waitForIt('www.google.com:80 www.yahoo.fr:80 www.laposte.net:80').wait();

   waitForIt('www.jesuisunnomdedomainequinexistepas.com:443').wait();

   waitForIt().add('www.google.com:443')
     .add('www.jesuisunnomdedomainequinexistepas.com:443')
     .timeout(15000)
     .delay(1000)
     .wait();

```

## <a name="installation"> Installation

    npm install @9fv.io/is-port-reachable

## <a name="api-reference"> API Reference

Please refer to [API documentation](docs/API.md).

## <a name="test"> Tests

### <a name="tests_run-unit-tests"> Run unit tests

    npm test

## <a name="compatibility"> Compatibility

### <a name="compatibility_node"> Node

Tested using [Node v9.5.0](https://nodejs.org/dist/v9.5.0/docs/api/).

### <a name="compatibility_browser"> Browser

Untested at this time.

## <a name="issues"> Issues

Feel free to submit issues and enhancement requests.

## <a name="contributing"> Contributing

Please refer to project's style guidelines and guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

**NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## <a name="credits"> Credits

* [node-host-port](https://github.com/9fv/node-host-port)
* Thanks to [Paul Schneider](https://stackoverflow.com/users/4547337/paul-schneider) for his [Stackoverflow answer](https://stackoverflow.com/q/29356800) about network connection timeout.

## <a name="history"> History

Please refer to [the changelog file](docs/CHANGELOG.md).

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 SAS 9 Février
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
