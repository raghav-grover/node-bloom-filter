let bloomFilter = require('./bloomfilter');
let mybloomFilter = new bloomFilter({
    falsePositiveRate: 0.00001,
    nElements: 10,
    optimize: true,
    isCounting: true
});
let pos = mybloomFilter.getPositions('hello');
console.log('Old seeds are ', mybloomFilter.seeds);
for (let i = 0; i < 252; i++) {
    mybloomFilter.add('hello');
}
pos.forEach((mypos) => {
    console.log(mypos, mybloomFilter.array[mypos]);
});
console.log(mybloomFilter.has('hello'));
console.log(mybloomFilter.has('hello'));
//mybloomFilter.delete('hello');
console.log(mybloomFilter.has('fello'));
let str = mybloomFilter.serialize();
let newBloomFilter = new bloomFilter({}, str);
//console.log('New seeds are', newBloomFilter.seeds);
pos.forEach((mypos) => {
    console.log(mypos, newBloomFilter.array[mypos]);
});
console.log('Hello world');