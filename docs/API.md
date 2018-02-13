# node-is-port-reachable: API Reference

Tests if a host port is accessible by validating the formatting of the host and the port beforehand.

## Classes

<dl>
<dt><a href="#PortReachableError">PortReachableError</a></dt>
<dd><p>Base error for {PortReachable}.</p>
</dd>
<dt><a href="#PortReachableValidationError">PortReachableValidationError</a></dt>
<dd><p>Error thrown when formatting of host or formatting of network port cannot be validated.</p>
</dd>
<dt><a href="#PortReachable">PortReachable</a></dt>
<dd><p>Test if a port of host is reachable.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#net">net</a></dt>
<dd><p>This file is part of node-is-port-reachable</p>
<p>Copyright (c) 2018 SAS 9 Février.</p>
<p>Distributed under the MIT License (license terms are at <a href="http://opensource.org/licenses/MIT">http://opensource.org/licenses/MIT</a>).</p>
</dd>
</dl>

<a name="PortReachableError"></a>

## PortReachableError
Base error for {PortReachable}.

**Kind**: global class  
<a name="new_PortReachableError_new"></a>

### new PortReachableError(...args)
Create a new instance of {PortReachableError}.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="PortReachableValidationError"></a>

## PortReachableValidationError
Error thrown when formatting of host or formatting of network port cannot be validated.

**Kind**: global class  
<a name="new_PortReachableValidationError_new"></a>

### new PortReachableValidationError(...args)
Create a new instance of {PortReachableValidationError}.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="PortReachable"></a>

## PortReachable
Test if a port of host is reachable.

**Kind**: global class  
**Access**: public  

* [PortReachable](#PortReachable)
    * [new PortReachable(...args)](#new_PortReachable_new)
    * _instance_
        * [.try()](#PortReachable+try) ⇒ <code>Promise</code>
    * _static_
        * [.validateHostPort(...args)](#PortReachable.validateHostPort) ⇒ <code>HostPortEntity</code>
        * [.factory(...args)](#PortReachable.factory) ⇒ [<code>PortReachable</code>](#PortReachable)

<a name="new_PortReachable_new"></a>

### new PortReachable(...args)
Create a new instance of {PortReachable}.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="PortReachable+try"></a>

### portReachable.try() ⇒ <code>Promise</code>
Try to reach the port of host.

**Kind**: instance method of [<code>PortReachable</code>](#PortReachable)  
<a name="PortReachable.validateHostPort"></a>

### PortReachable.validateHostPort(...args) ⇒ <code>HostPortEntity</code>
Validate host and port formatting using [node-host-port](https://github.com/9fv/node-host-port) entity.

**Kind**: static method of [<code>PortReachable</code>](#PortReachable)  
**Returns**: <code>HostPortEntity</code> - The {HostPortEntity} if formatting of host and port is validated.  
**Throws**:

- [<code>PortReachableValidationError</code>](#PortReachableValidationError) On validation error.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="PortReachable.factory"></a>

### PortReachable.factory(...args) ⇒ [<code>PortReachable</code>](#PortReachable)
Factory to create a new instance of {PortReachable}.

**Kind**: static method of [<code>PortReachable</code>](#PortReachable)  

| Param |
| --- |
| ...args | 

<a name="net"></a>

## net
This file is part of node-is-port-reachable

Copyright (c) 2018 SAS 9 Février.

Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).

**Kind**: global constant  

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
