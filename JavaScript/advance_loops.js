//for of 

// for (const element of object) {
    
// }
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}
const greetings = "hello world";
for(const greet of greetings){
    // console.log(`Each char at ${greet}`);
}


//Maps

const map = new Map()
map.set('IN' , "India");
map.set('US' , "United states of america");
map.set('FR' , "France");

// console.log(map);

for(const [key,value] of map){
    // console.log(key,`->`,value);
}

const myObjects = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby",
    
}
for(const key in myObjects){
    // console.log(myObjects[key]);
    // console.log(key);
}

// ===========================for each=============================
const coding = ["js" , "cpp" , "python" , "java" , "ruby"];

// coding.forEach(  function(val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })

coding.forEach( (item,index,arr)=> {
    console.log(item,index,arr);
})

