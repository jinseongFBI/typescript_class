"use strict";
//class =>objex
//{mark:'male',jade:'male'}
//{chloe:'famale',alex:'male',anna:'female'}
class Students {
    constructor() {
        this.mark = "male";
    }
}
const a = new Students();
a.mark = "male";
a.jade = "male";
console.log(a);
const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";
console.log(b);
