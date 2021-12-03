// const names = ["Max", "Emanuelle"]
const names: Array<string> = []

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!")
    }, 2000)
})

promise.then(data => data.split(" "))

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}
function mergeWithContraints<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Mac', hobbies: ['Soccer']}, {age: 30})
console.log(mergedObj.age);

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value."
    if (element.length === 1 ) {
        descriptionText = 'Got 1 element.'
    } else if (element.length > 1) {
        descriptionText = 'Got' + element.length + ' elements.'
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hello there amigo!'));
console.log(countAndDescribe(['Hockey', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

extractAndConvert({name: 'Max'}, 'name')

// removeItem would not work well with objects
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Spartacus')
textStorage.addItem('Crixus')
textStorage.addItem('Batiatus')
textStorage.removeItem('Batiatus')
console.log(textStorage.getItems());
