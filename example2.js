"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class person {
    constructor(age) {
        this.name = "Mark";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    // constructor(age: number){
    //   this.age=age;
    // }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
//tsconfing.json --stric:false 하면 안뜸 근데 문제 생김
//strictpropertyinitalization;;true
//strictnullcheck;;true
const p1 = new person(39);
const p2 = new person();
console.log(p1);
// p1.age = 39;
console.log(p1.age);
