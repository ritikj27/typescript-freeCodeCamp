function addTwo(num:number):number{
    return num
}

function getUpper(val:string){
    return val.toUpperCase()
}
function signupUser(name:string,email:string,isPaid:boolean=false){

}
function getValue(myVal:number):boolean | string{
    if(myVal > 5){
        return true;
    }
    return "200 ok"
}
let word = addTwo(7);
getUpper("hello");
signupUser("ritik",'ritik@gmail.com',true);

export {}
