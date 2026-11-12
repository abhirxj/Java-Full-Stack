const accountId = 123456;
let accountEmail = "user@example.com";
var accountPassword = "123456";

accountCity = "Jaipur"; // This will create a global variable, not recommended>>>>>>\\\
accountCity = "Bhopal";
accountEmail = "myemail@example.com";
accountPassword = "4321";

// accountId = "0001"; // This will throw an error because accountId is a constant
console.table([accountId , accountEmail , accountPassword , accountCity]);