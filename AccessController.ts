class Person2 {
  public name: string = "Mark";
  // age!: number;//클래스의 느낌표는 이럴때
  private _age!: number;

  public constructor(age?: number){
    if(age===undefined){
      this._age=20;
    }else{
      this._age=age;
    }
  }
 
  public async init(){}
  
}

const p3: Person2 = new Person2(39);
console.log(p3);
