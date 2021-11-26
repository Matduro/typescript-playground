function addNums(n1: number, n2: number) {
    return n1 + n2
}

function printNums(num: number): void {
    console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => number) {
    const result = n1 + n2
    cb(result)
}

printNums(addNums(15, 16))

let combineValues: (a: number, b: number) => number

combineValues = addNums

console.log(combineValues(9, 9));

addAndHandle(11, 20, (result) => {
    console.log(result);
    return undefined
})