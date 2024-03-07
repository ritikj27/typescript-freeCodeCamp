"use strict";
console.log("hello");
class User {
    constructor(name, email) {
        this.city = 'indore';
        this.name = name,
            this.email = email;
    }
}
const user = new User('h', '@gmail.com');
user.city = 'ri';
