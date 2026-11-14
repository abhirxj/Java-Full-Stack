//singleton
Object.create;
//object made by constructor is singleton else literal\

//Object literals

const mySym = Symbol("key1");

const jsUSer = {
    name: "Abhi",
    "full name": "Abhiraj Singh Chouhan",
    age: 18,
    [mySym]: "myKey1",
    location: "Bhopal",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// console.log(jsUSer.location);
// console.log(jsUSer["location"]);
// console.log(jsUSer["full name"]);

// console.log(jsUSer.full name); error dega cause key is string

// console.log(jsUSer[mySym]);
// console.log(jsUSer);

jsUSer.greeting = function(){
    console.log("hello from function");
}
jsUSer.greetingTwo = function(){
    console.log(`hello from function , my name is ${jsUSer.name}`);
}

console.log(jsUSer.greeting());
console.log(jsUSer.greetingTwo());



