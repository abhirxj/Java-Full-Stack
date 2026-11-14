let id = "abhirxj";
const pass = "@123";


// alone func is reference
//but with func() is execution
function func(id,pass){
    // console.log(`id: ${id} \npassword: ${pass}`);
}

// func(id,pass);

// function calculatePrice(...num1) {//rest operatorr
//     return num1;
// }
// console.log(calculatePrice(100,200,300,400));

//one more way
function calculatePrice(val1 , val2 , ...num1) {//rest operator with some valuess
    return num1
}
console.log(calculatePrice(100,200,300,400,500));
