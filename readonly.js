"use strict";
class person6 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Mark";
    }
    hello() {
        this.country = 'china';
    }
}
const r1 = new person6("mark", 39);
console.log(r1.name); //get을 하는 함수 getter 얻어오는 거
r1.name = "woongjae"; //set을 하는 함수 setter  변경하는거
console.log(r1.name); //get을 하는 함수 getter 얻어오는 거s
