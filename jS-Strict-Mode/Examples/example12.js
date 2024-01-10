// Deleting an undeletable property is not allowed
"use strict";
delete Object.prototype;
// TypeError: Cannot delete property 'prototype' of function Object() { [native code] }