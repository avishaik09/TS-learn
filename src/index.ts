// let a:string="RAM";

// let numbo=<string> "Ram";

// let surname: string | number;

// interface Obj {
//   height: number;
//   weight: number;
//   gender?: boolean;
// }

// type FuncType = (n: number, m: number) => void;
// interface NewObj extends Obj {
//   scolar: boolean;
//   func: FuncType;
// }

// const person:NewObj ={
//   height:54,
//   weight:100,
//   scolar:true,
//   func:(n,m) => {console.log(n*m);}
// }

// person.func(12,10)
// -------------------------------------------------------

// type FuncType =(n:number,m:number,l?:number) =>number;

// const func:FuncType=(n,m,l) => {
//     if (typeof l === 'undefined') return n*m;
//     return n*m*l

// }

// console.log(func(10,20));

//default paramater
// type FuncType =(n:number,m:number,l?:number) =>number;
// const func:FuncType=(n,m,l=20) => {
//     if (typeof l === 'undefined') return n*m;
//     return n*m*l

// }
// console.log(func(10,20));

//rest operator
// type FuncType =(...n:number[]) =>number[];
// const func:FuncType=(...n) => {

//     return n;

// }
// console.log(func(10,20,30,40,50,60));

// type FunType=(...m:number[]) => number;
// const lol:FunType=(n)=>{
//     return n;
// }

// function with object

// interface Product{
//     name: string;
//     price: number;
//     stock: number;
//     photo: string;
//     readonly id:string;
// }
// type getDataType = (product: {
//   name: string;
//   price: number;
//   stock: number;
//   photo: string;
// }) => void;

// type getDataType = (product: Product) => void;

// const getData=(product:{name:string,price:number,stock:number,photo:string}):void => {console.log(product);}
// const getData: getDataType = (product) => {

//   console.log(product);
// };

// const productOne:Product ={
//     name: "macbook",
//     price: 1,
//     stock:20,
//     photo:"pic.jpg",
//     id:"etqwet"
// }

// getData(productOne)

//never type

// const errorHandler=():never => {
//     throw new Error();
// };
// const errorHandlers=() => {
//     return new Error();
// };

//classes

// class Player {
//     readonly id: string
//   private height;
//   public width;

//   constructor(height: number, width: number) {
//     this.height = height;
//     this.width = width;
//   }
//   constructor(
//     private height: number,
//     public width: number,
//     protected power: number
//   ) {
//     this.id=String(Math.floor(Math.random()*100));
//   }

//   myHeight = () => {
//     return this.height;
// get myHeight(): number {
//     return this.height
//   };
//   set changeHeight(val:number) {
//     this.height = val;
//   }
// }
// const abhi = new Player(100, 250, 20);
// console.log("height",abhi.myHeight);
// abhi.changeHeight=122;
// console.log("height",abhi.myHeight);

// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, width: number, power: number, special: boolean) {
//     super(height, width, power);
//     this.special = special;
//   }
//   getMyPower=() =>  this.power;
// }
// const abhi = new Player2(100, 250, 20,true);
// console.log("height",abhi.myHeight());
// console.log("width",abhi.width);
// console.log("power",abhi.getMyPower());
// console.log("ID",abhi.id);

// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   offer?: boolean;
// }
// interface GiveId{
//     getId:() => string;
// }

// class Product implements ProductType,GiveId {
//   private id: string = String(Math.random() * 100);
//   constructor(
//     public name: string,
//     public price: number,
//     public stock: number
//   ) {}

//   getId=()=> { return this.id; }
// }

// const prod1 = new Product("macbook", 200, 20);

// ------------------------------------------------

// type assertion

// const btn=document.getElementById("btn")!;
// const btn=<HTMLElement>document.getElementById("btn");
// const btn=document.getElementById("btn")as HTMLElement;
// btn.onclick

// const img=document.getElementById("myimg")  as HTMLImageElement;
// img.src

// const img=document.querySelector("img")!;
// img.src

// const form = document.getElementById("myform") as HTMLFormElement;
// const myinput = document.querySelector("form> input") as HTMLInputElement;
// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   console.log(myinput.value);
//   const value = Number(myinput.value);
//   const h2 = document.createElement("h2");
//   h2.textContent = String(value + 20);

//   const body = document.querySelector("body") as HTMLElement;
//   body.append(h2);
// };

// interface Person {
//   name: string;
//   email: string;
// }
// interface Person {
//     [key:string]: string;

//   }
// const myObj: Person = {
//   name: "John",
//   email: "john@example.com",
// };

// let key="name";
// myObj[key as keyof Person]
// myObj[key as keyof typeof myObj]

// const getData1 =(key:keyof Person):string=>{
//     return myObj["name"];
// }
// const getData =(key:string):string=>{
//     return myObj[key];
// }

// console.log(myObj.name);

// -----------------------------------------------

//utility type

//1. partial type

// type User={
//     name:string;
//     email:string;
// }
// type User2=Partial<User>;

//2. required type = opposite of partial
// type User={
//     name?:string;
//     email?:string;
// }

// type User2=Required<User>;

// const user:Required<User> ={
//     name: 'abhishek',
//     email: "abhishek@gmail.com"
// }

//3. Readonly type makes every property read-only
// type User = {
//   name: string;
//   email: string;
// };

// type User2 = Readonly<User>;

// const user: User2 = {
//   name: "abhishek",
//   email: "abhishek@gmail.com",
// };

//4. Recordkeys type
// type User={
//     name: string,
//     email: string
// }

// const user={
//     name: "abhishek",
//     email: "abhishek@gmail.com",
// }
// type User2=Record<"name"|"email"|"gender",string>

// example
//  interface UserInfo{
//     age: number;
//  }

//  type UserName="john"|"jane"|"elon"|"musk"

//  const users:Record<UserName, UserInfo>={
//     john: {age: 1},
//     jane: {age:12},
//     elon: {age:52},
//     musk: {age:42}
//  }

//5. Pick<type,keys>
// interface OrderInfo{
//     readonly id: string;
//     user:string;
//     city:string;
//     state:string;
//     country:string;
//     status: string;

// }

// type ShippingInfo=Pick<OrderInfo,"city"|"state"|"country">;

//6.Omit<type,keys>
// interface ShippingInfo {
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }

// type Random = Omit<ShippingInfo, "status">;

// 7. Exclude<TypeError,ExcludedUnion>
// type MyUnion = string|number|boolean
// type Random=Exclude<MyUnion,boolean>

// 8.Extract<Type,Union>
// type MyUnion = string|number|boolean
// type Random=Extract<MyUnion,boolean>

// 9.NonNullLabel<Type>
// type MyUnion = string|number|boolean|null|undefined
// type Random=NonNullable<MyUnion>
// type Random2=Exclude<MyUnion,undefined|null>

//10. Parameters<Type>
//     const myfunc=(a:number,b:number)=>{
//         console.log(a+b);
//     }
// type Random=Parameters<typeof myfunc>

//11. ConstructorParameters<Type>
// class SampleClass{
//     constructor(public s:string,public t:String){}
// }
// type random=ConstructorParameters<typeof SampleClass>;

// 12.ReturnType<Type>
// const myfunc=(a:number,b:string):string=>{
//        return (a+b);
//         }
// type Random=ReturnType<typeof myfunc>;

//13. InstanceType<Type>
// class SampleClass{
//     constructor(public s:string,public t:String){}
// }
// type Random=InstanceType<typeof SampleClass>;

// const user:Random={
//     s:"nmnm",
//     t:"sdg",
// }

// ===================================

// generic

// const func=<T>(n:T):T=>{

// return n;
// }

// const ans=func(20);
// const ans1=func("20");
// const ans3=func(true);

// type Person={
//     name:string;
//     age:number;

// }

// const person1:Person={
// name: "abhi",
// age:25,
// }

// const func=<T>(n:T):T=>{

//     return n;
//     }

//     const ans=func<Person>(person1);

// const arr:number[] = []
// const arr2:Array<number> = []

// const func=<T,U>(n:T,o:U):{n:T,o:U}=>{
// return {n,o}
// }

// const ans=func<number,string>(20,"lol")
// console.log(ans);
// interface Person{
//     name:string;
//     age:number;

// }
// interface Person2{
//     name:string;
//     age:number;
//     email:string;

// }

// const user:Person ={
//     name: "abhis",
//     age:20,
// }
// const user2:Person2 ={
//     name: "abhis",
//     age:20,
//     email:"abhis@gmail.com"
// }
// const func=<T,U extends T>(n:T,o:U):{n:T,o:U}=>{
//     return {n,o}
//     }

//     const ans=func<Person,Person2>(user,user2)

type Person = {
  name: string;
  age: number;
};

const user: Person[] = [
  {
    name: "John",
    age: 52,
  },
  {
    name: "Jane",
    age: 25,
  },
  {
    name: "Elon",
    age: 2,
  },
];
const filterByPeople = <T,U extends keyof T>(arr: T[], property: U, value: T[U]):T[] => {
   return arr.filter(item=>item[property]===value)
};


const filteredPeopleByName=filterByPeople(user,"name","Elon")