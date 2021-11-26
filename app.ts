// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: "Mathieu",
    age: "31",
    height: "183 cm",
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
}

let favoriteActivities: string[]
favoriteActivities = ["sports"]

console.log(person);
 