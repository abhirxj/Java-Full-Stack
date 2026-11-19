//filter - it returns values
const myNums = [1,2,3,4,5,6,7,8,9,10];

// const values = myNums.filter( (num) => num > 4);

const values = myNums.filter( (num)=> {
    return num > 4;
})

// console.log(values);

//=========================MAP========================

// const newNums = myNums.map( (num) => num+10);
// above and below , same-same but different
// const newNums = myNums.map( (num) => { return num + 10})

//nested maps (chaining)
const newNums = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(newNums);

//===============reduce=======================
const arr = [1,2,3]

// const myTotal = arr.reduce( function (acc,currVal) {
//     console.log(`acc: ${acc} and currValue: ${currVal}`);
//     return acc + currVal;
// }, 0)

//simple above work but in single line
const myTotal = arr.reduce( (acc,curr) => acc + curr, 0); 

console.log(myTotal);

                                  