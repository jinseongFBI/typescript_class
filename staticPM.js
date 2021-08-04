"use strict";
class people {
    // public static hello(){
    hello() {
        console.log("안녕하세요", people.city);
    }
    change() {
        people.city = 'LA';
    }
}
people.city = "seoul";
const x1 = new people();
// people.hello();
x1.hello();
const x2 = new people();
x2.hello();
x1.change();
x1.hello();
