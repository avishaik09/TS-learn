// type alias

// type User = {
//   name: string;
//   age: number;
//   gender?: string;
// };

// const user: User = {
//   name: "John",
//   age: 25,

// };

// function login(userData: User):User{
//     return userData;
// }

// console.log(login({name: "John", age: 25}));

// type ID=number|string;

// const userId:ID='123'

//interface
/*
interface Transaction{
    payerAccountNumber:number;
    payeeAccountNumber:number;
}

interface BankAccount{
    accountNumber:number;
    accountHolder:string;
    balance:number;
    isActive:boolean;
    transactions:Transaction[];
}

const transaction1:Transaction ={
    payerAccountNumber:123,
    payeeAccountNumber:456
}
const transaction2:Transaction={
    payerAccountNumber:456,
    payeeAccountNumber:123
}


const bankAccount:BankAccount={
    accountNumber:123,
    accountHolder:"John Smith",
    balance:1000,
    isActive:true,
    transactions:[transaction1, transaction2]

}
*/

//Extend

// interface Book{
//     title:string;
//     price:number;
// }
// interface Book{
//     author:string;
// }
// interface EBook extends Book{
//     title:string;
//     price:number;
//     fileSize:number;
//     format:string;
// }

// const book: Book = {
//     title: "The Great Gatsby",
//     price: 100,
//     author: ""
// };

// limitation of type and interface

// type Book={
//     title:string;
//     price:number;
// }
// type Book={
//     author:string;
// }

//primitive can be created with type, and interface are used with object

// unions
// type ID=number|string;

// function printId(id:ID){
//     if(typeof id === 'string'){
//         console.log(id.toUpperCase());

//     }
//     else{
//         console.log(id);
//     }
// }

// printId("hello world");

// generic

// function logAnything <T>(arg:T):T{
//     console.log(arg);
//     return arg;

// }

// logAnything("hello")

// interface HasAge {
//   age: number;
// }
// interface Player extends HasAge {
//   name: string;
// }

// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

// const people:HasAge[] = [{ age: 30 }, { age: 40 }, { age: 60 }, { age: 50 }];

// const players: Player[] = [
//   { age: 30, name: "sam" },
//   { age: 40, name: "ram" },
//   { age: 60, name: "shyam" },
//   { age: 50, name: "ajay" },
// ];

// console.log(getOldest(people));

// // const person=getOldest(players)as Player;  assertion
// const person = getOldest(players);


// interface IPost{
//   title: string;
//   id: number;
//   description: string;
// }

// interface IUser{
//   id: number;
//   name: string;
// age:number;
// }


// const fetchPostData=async(path:string):Promise<IUser[]> => {
//   const response=await fetch(`http://localhost:3000${path}`);
//   return response.json();
// }

// const fetchData = async <ResultType>(path:string):Promise<ResultType>=>{
//   const response=await fetch(`http://localhost:3000${path}`);
//   return response.json();
// }


// (async() =>{
//   // const posts=await fetchPostData("/posts");
//   const data=await fetchData<IUser[]>("/users ");
//  data[0]
// })();


//structural typing or duck typing == when two objects have same properties and methods, they are of same type.

// interface ICredential{
// username:string;
// password:string;
// isAdmin?:boolean;
// }
// function login(credentials:ICredential):boolean {
//   console.log(credentials);
//   return true;
// }

// const user:ICredential={
//   username: 'samay',
//   password:'secret',
//   isAdmin: true,
// }
  
//   login(user);



//    inference

//   let num=0;  //considered number type automatically




// ts config

