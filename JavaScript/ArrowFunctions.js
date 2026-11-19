const user = {
    username: "abhi",
    price: 999,

    welcomeMsg: function(){
        // console.log(`${this.username} , welcome to website`);
        
    }
}

// console.log(user.welcomeMsg( ))
user.welcomeMsg(); 

function sutta(){
    // let suttaname = "advance"
    // console.log(this.suttaname);
    // console.log(this);
    
}
// console.log(sutta.suttaname); //we cannot use functions as objects

const chai = () => {
    let username = "abhiraj"
    console.log(username);
}
// console.log(chai);
// chai();

 
