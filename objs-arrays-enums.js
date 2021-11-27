"use strict";
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Mathieu",
    age: "31",
    height: "183 cm",
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ["sports"];
console.log(person);
