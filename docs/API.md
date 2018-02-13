# node-is-port-reachable: API Reference

Tests if a host port is accessible by validating the formatting of the host and the port beforehand.

## Classes

<dl>
<dt><a href="#WaitForItError">WaitForItError</a></dt>
<dd><p>Base error for {WaitForIt}.</p>
</dd>
<dt><a href="#WaitForItValidationError">WaitForItValidationError</a></dt>
<dd><p>Error thrown when formatting of host or formatting of network port cannot be validated.</p>
</dd>
<dt><a href="#WaitForIt">WaitForIt</a></dt>
<dd><p>Waits until all pairs (host:port) respond.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#_">_</a></dt>
<dd><p>This file is part of node-wait-for-it</p>
<p>Copyright (c) 2018 SAS 9 Février.</p>
<p>Distributed under the MIT License (license terms are at <a href="http://opensource.org/licenses/MIT">http://opensource.org/licenses/MIT</a>).</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#waitForIt">waitForIt(...args)</a> ⇒ <code><a href="#WaitForIt">WaitForIt</a></code></dt>
<dd><p>A factory function to create a new instance of {WaitForIt}.</p>
</dd>
</dl>

<a name="WaitForItError"></a>

## WaitForItError
Base error for {WaitForIt}.

**Kind**: global class  
<a name="new_WaitForItError_new"></a>

### new WaitForItError(...args)
Create a new instance of {WaitForItError}.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="WaitForItValidationError"></a>

## WaitForItValidationError
Error thrown when formatting of host or formatting of network port cannot be validated.

**Kind**: global class  
<a name="new_WaitForItValidationError_new"></a>

### new WaitForItValidationError(...args)
Create a new instance of {WaitForItValidationError}.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="WaitForIt"></a>

## WaitForIt
Waits until all pairs (host:port) respond.

**Kind**: global class  
**Access**: public  

* [WaitForIt](#WaitForIt)
    * [new WaitForIt(...args)](#new_WaitForIt_new)
    * _instance_
        * [.add(value)](#WaitForIt+add)
        * [.wait()](#WaitForIt+wait) ⇒ <code>Promise</code>
    * _static_
        * [.factory(...args)](#WaitForIt.factory) ⇒ [<code>WaitForIt</code>](#WaitForIt)

<a name="new_WaitForIt_new"></a>

### new WaitForIt(...args)
Create a new instance of {WaitForIt}.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="WaitForIt+add"></a>

### waitForIt.add(value)
Add an host and port to reach.

**Kind**: instance method of [<code>WaitForIt</code>](#WaitForIt)  

| Param |
| --- |
| value | 

<a name="WaitForIt+wait"></a>

### waitForIt.wait() ⇒ <code>Promise</code>
Waits until all pairs (host:port) respond.

**Kind**: instance method of [<code>WaitForIt</code>](#WaitForIt)  
<a name="WaitForIt.factory"></a>

### WaitForIt.factory(...args) ⇒ [<code>WaitForIt</code>](#WaitForIt)
Factory to create a new instance of {WaitForIt}.

**Kind**: static method of [<code>WaitForIt</code>](#WaitForIt)  

| Param |
| --- |
| ...args | 

<a name="_"></a>

## _
This file is part of node-wait-for-it

Copyright (c) 2018 SAS 9 Février.

Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).

**Kind**: global constant  
<a name="waitForIt"></a>

## waitForIt(...args) ⇒ [<code>WaitForIt</code>](#WaitForIt)
A factory function to create a new instance of {WaitForIt}.

**Kind**: global function  

| Param | Description |
| --- | --- |
| ...args | The arguments. |


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
