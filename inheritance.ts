class Parent{
  constructor(protected _name:string,private _age:number){}
  public print():void{
    console.log(`이름은 ${this._name}이고,나이는 ${this._age}입니다.`);
  }
  protected printName():void{
    console.log(this._name,this._age);
  }
}
// const r=new Parent("mark",39);
// r.print();

class Child extends Parent{
  // protected _name="mark jr."

  // public _name="mark jr."

  public gender="male";

  constructor(age:number){
    super('mark jr.',age) //super을 먼저 호출해야 한다.
    this.printName();
  }
}

// const c = new Child("son",5);
const c = new Child(1);
// c.print();
// c.gender
c.print();

