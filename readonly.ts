class person6 {
  public readonly name: string = "Mark";
  // private readonly constry: string = "korea";
  // private readonly country: string ;
  public readonly country: string ;//readonly public,private 변경no

  public constructor(private _name:string,private age: number){}

  hello(){
    this.country='china';
  }
}

const r1: person6 = new person6("mark",39);
console.log(r1.name); //get을 하는 함수 getter 얻어오는 거
r1.name="woongjae"//set을 하는 함수 setter  변경하는거
console.log(r1.name); //get을 하는 함수 getter 얻어오는 거s