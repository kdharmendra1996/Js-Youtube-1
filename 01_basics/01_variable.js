const accountId=123456;
let accountEmail="dhrmendr12@gmail.com";
var accountPassword="123456";
accountCity="Buxar"
let accountState;

console.log(accountId);

accountEmail="hc@hc.com";
accountPassword="787878";
accountCity="Patna"

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])