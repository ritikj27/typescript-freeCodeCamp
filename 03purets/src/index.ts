console.log("hello");
// class User{
//     private name:string
//     public email:string
//     public city:string = 'indore'
//     constructor(name:string,email:string){
//         this.name = name;
//         this.email = email;
//     }
// }
class User {
  constructor(public name: string, public email: string,private userId:string) {}
}

const user = new User("h", "@gmail.com",'123');
