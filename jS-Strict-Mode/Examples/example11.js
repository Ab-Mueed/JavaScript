// Writing to a read-only property is not allowed
"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;  
// TypeError: Cannot assign to read only property 'x' of object '#<Object>