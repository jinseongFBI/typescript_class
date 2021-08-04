class people{
  public static city="seoul"
  // public static hello(){
  public hello(){
    console.log("안녕하세요",people.city);
  }
  public change(){
    people.city='LA';
  }
}

const x1 = new people();
// people.hello();
x1.hello();

const x2=new people();
x2.hello();

x1.change();
x1.hello();