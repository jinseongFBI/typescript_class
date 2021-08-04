class person5 {
  public constructor(private _name:string,private age: number){}

  get name(){
      // console.log("get")
      return this._name+ "Lee";
  }

  set name(n:string){
    console.log("set")
    this._name=n;

  }
}

const g1: person5 = new person5("mark",39);
console.log(g1.name); //get을 하는 함수 getter 얻어오는 거
g1.name="woongjae"//set을 하는 함수 setter  변경하는거
console.log(g1.name); //get을 하는 함수 getter 얻어오는 거s