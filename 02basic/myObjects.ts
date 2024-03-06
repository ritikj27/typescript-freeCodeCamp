// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAvtive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(_user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });

// readonly we can not change this
//?: are help for optional
type myUser = {
  readonly _id: string;
  name: string;
  email: string;
  cardNum?: number;
};

let newUser: myUser = {
  _id: "123",
  name: "hl",
  email: "R@gmail.com",
};
// newUser._id ='2344'
type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

// myUser.email = "h@gmail.com"
// myUser._id = "asa"
