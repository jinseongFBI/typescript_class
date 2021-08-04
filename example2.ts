class person{
  name: string = "Mark";
  // age!: number;//클래스의 느낌표는 이럴때
  age: number;

  constructor(age?: number){
    if(age===undefined){
      this.age=20;
    }else{
      this.age=age;
    }
  }
  // constructor(age: number){
  //   this.age=age;
  // }
  async init(){}
  
}
//tsconfing.json --stric:false 하면 안뜸 근데 문제 생김
//strictpropertyinitalization;;true
//strictnullcheck;;true

const p1: person = new person(39);

const p2: person = new person();
console.log(p1);
// p1.age = 39;
console.log(p1.age);