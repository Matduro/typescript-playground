"use strict";
function addNums(n1, n2) {
    return n1 + n2;
}
function printNums(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printNums(addNums(15, 16));
let combineValues;
combineValues = addNums;
console.log(combineValues(9, 9));
addAndHandle(11, 20, (result) => {
    console.log(result);
    return undefined;
});
