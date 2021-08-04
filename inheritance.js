"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}이고,나이는 ${this._age}입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
// const r=new Parent("mark",39);
// r.print();
class Child extends Parent {
    constructor(age) {
        super('mark jr.', age); //super을 먼저 호출해야 한다.
        // protected _name="mark jr."
        // public _name="mark jr."
        this.gender = "male";
        this.printName();
    }
}
// const c = new Child("son",5);
const c = new Child(1);
// c.print();
// c.gender
c.print();
