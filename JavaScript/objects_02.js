//const tinderUser = new Object(); this is a singleton object

const tinderUser = {}; //this is not 

tinderUser.id = "123abc";
tinderUser.name = "Abhiraj"
tinderUser.isLoggedIN = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "abhi",
            lastname: "singh",
        }
    }
}

// console.log(regularUser.fullName.userfullname.lastname);

const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "a" , 4: "b"};

// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({} , obj1 , obj2);

//spread parameter
const obj3 = {...obj1 , ...obj2};

// console.log(obj3);

// const user = {
//     {

//     }
// }

// console.log(tinderUser);

//extracting all keys from tinderUser object
// console.log(Object.keys(tinderUser));

//extracting all values from tinderUser object
// console.log(Object.values(tinderUser));
// console.log(Object.entries())

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitest"
}

// course.courseInstructor

//de-structuring an object
const {courseInstructor : ci} = course

console.log(ci);

//creating a JSON - it has both key and values as string
// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free",
// }   



