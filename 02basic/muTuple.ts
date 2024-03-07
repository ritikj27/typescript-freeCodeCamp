// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type tUser = [number, string]

const tnewUser: tUser = [112, "example@google.com"]

tnewUser[1] = "hc.com"
// tnewUser.push(true)
