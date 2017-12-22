'use strict'
require('colors')
const VAT = 0.2;
var products = [
    {id:1, name:"PC - Alienware", price:400},
    {id:2, name:"Keyboard - Steelseries Apex M800", price:60.25},
    {id:3, name:"Mouse - Razer Mamba", price:40.20},
    {id:4, name:"Monitor - Dell UltraSharp 34 Curved", price:749.99},
    {id:5, name:"Laptop - Lenovo IdeaPad 700-15", price:960.99}
];

var accountBalance = 300;

function withdraw(amount, callback)
{
	// If [amount] is more than [accountBalance] use the 
    //   callback function to pass the error message. Eg callback("Insufficient funds.");
    
    // Otherwise withdraw [amount] from [accountBalance] and call the 
    //    callback function with no parameters
    if (amount > accountBalance) {
        callback("Insufficient funds.");
    } else {
        accountBalance  = accountBalance - (amount + calculateVAT(amount));
        callback();
    }
}
function calculateVAT(amount)
{	
    // Use the [VAT] constat to calculate the tax from [amount] and return tax.
	
    return amount*VAT;
}
function buy(product, callback)
{
	// Call the withdraw function passing in the price of [product]
    //   along with an anonymous function Eg function(err){...}

    // Inside the anonymous function check if err is "truesy". If err is "truesy" (error exists)
    //   pass the error back to the caller using the callback function. Eg callback(err)
    
    // If the err is "falsy" (no error), continue by calling the calculateVAT function to
    //   receive the tax. 
    // Build up the respose messages using console.log()
    // Expected output:
    // You bought a Snickers for $8.20
    // VAT: 1.64 SEK
    // Don't forget to call the callback function!
	
    withdraw(product.price, function(err){
        if (err) {
            callback(err);
        } else {
            var tax = calculateVAT(product.price);
            var m = "You bought a "+product.name+" for $"+product.price;
            var t = "VAT: $"+tax.toFixed(2);
            console.log(m.green);
            console.log(t.grey);
            callback();
        }
    });
}
buy(products[1], function(err)
{
    if(err){
        console.log(err.red);
    }
    else{
        var m = "Your balance is $" + accountBalance.toFixed(2);
        console.log(m.green);
    }
});
