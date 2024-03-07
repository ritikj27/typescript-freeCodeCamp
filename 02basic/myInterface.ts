interface UserI {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

//interface as feture of re openig and inheritance feature
//type cant be re open but it can inheritance using intersection

interface UserI {
    githubToken: string
}

interface AdminI extends UserI {
    role: "admin" | "ta" | "learner"
}

const hiteshI: AdminI = { dbId: 22, email: "h@h.com", userId: 2211,
role: "admin",
githubToken: "github",

startTrail: () => {
    return "trail started"
},
getCoupon: (name: "hitesh10", off: 10) => {
    return 10
}
}
hiteshI.email = "h@hc.com"
// hitesh.dbId = 33
