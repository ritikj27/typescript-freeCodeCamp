console.log("hello")
class User{
    name:string
    email:string
    city:string = 'indore'
    constructor(name:string,email:string){
        this.name = name,
        this.email = email;
    }
}

const user = new User('h','@gmail.com')
user.city='ri'
