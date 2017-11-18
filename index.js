let bloomFilter = require('./bloomfilter');
let sizeof = require('object-sizeof');

let mybloomFilter = new bloomFilter({
    falsePositiveRate: 0.00001,
    nElements: 1000,
    optimize: true,
    isCounting: false
});
let pos = mybloomFilter.getPositions('hello');
console.log(pos);
for (let i = 0; i < 18; i++) {
    mybloomFilter.add('hello');
}
console.log(mybloomFilter.has('hello'));
console.log(mybloomFilter.has('hello'));

let { buffer } = mybloomFilter;
let newBuffer = Buffer.alloc(buffer.byteLength);
buffer.copy(newBuffer, 0, 0, buffer.byteLength);
let newArray = new Uint8Array(newBuffer);
let oldArray = new Uint8Array(buffer);
newArray.forEach((helli, index) => {
    if (helli > 0) {
        console.log(index, helli);
    }
});
oldArray.forEach((helli, index) => {
    if (helli > 0) {
        console.log(index, helli);
    }
});


//mybloomFilter.serialize();
console.log('Hello world');