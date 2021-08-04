class ClassName{
  private static instance: ClassName|null=null;
  public static getInstance():ClassName{
    //classname 으로 부터 만든 object 가 있으면 그걸 리턴
    //classname 으로 부터 만든 object 가 없으면,만들어서 리턴
    if(ClassName.instance===null){
     ClassName.instance =new ClassName();
    }
    return ClassName.instance;
  }
  private constructor(){}
}

const x= ClassName.getInstance();
const y= ClassName.getInstance();
// const x= new ClassName();
// const y= new ClassName();

console.log(x===y);