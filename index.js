const toArray = (collection) => Array.isArray(collection) ? collection : Object.values(collection);

const myEach = (collection, callback) => {
    toArray(collection).forEach((value, index) => callback(value, index, collection));
    return collection;
};

const myMap = (collection, callback) => {
    return toArray(collection).map((value, index) => callback(value, index, collection));
};

const myReduce = (collection, callback, acc) => {
    const arr = toArray(collection);
    let startIndex = acc === undefined ? 1 : 0;
    acc = acc === undefined ? arr[0] : acc;

    for (let i = startIndex; i < arr.length; i++) {
        acc = callback(acc, arr[i], collection);
    }
    return acc;
};

const myFind = (collection, predicate) => {
    for (const value of toArray(collection)) {
        if (predicate(value)) return value;
    }
    return undefined;
};

const myFilter = (collection, predicate) => {
    return toArray(collection).filter(value => predicate(value));
};

const mySize = (collection) => toArray(collection).length;

const myFirst = (array, n) => (n === undefined ? array[0] : array.slice(0, n));

const myLast = (array, n) => (n === undefined ? array[array.length - 1] : array.slice(-n));

const myKeys = (object) => Object.keys(object);

const myValues = (object) => Object.values(object);

console.log(myEach([1, 2, 3], console.log));
console.log(myMap([1, 2, 3], num => num * 2));
console.log(myReduce([1, 2, 3], (acc, val) => acc + val, 0));
console.log(myFind([1, 2, 3], num => num > 2));
console.log(myFilter([1, 2, 3, 4], num => num % 2 === 0));
console.log(mySize({ a: 1, b: 2 }));
console.log(myFirst([1, 2, 3]));
console.log(myLast([1, 2, 3], 2));
console.log(myKeys({ a: 1, b: 2 }));
console.log(myValues({ a: 1, b: 2 }));