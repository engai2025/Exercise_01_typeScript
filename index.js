"use strict";
let productName = "HP Laptop";
let price = 200;
let discountAvailable = true;
function getDiscount(price, discount) {
    return price - (price * discount) / 100;
}
function printLength(x) {
    if (typeof x === "string" || Array.isArray(x)) {
        console.log(x.length);
    }
}
console.log(productName);
console.log(price);
console.log(discountAvailable);
console.log(getDiscount(price, 10));
console.log(getDiscount(500, 20));
printLength("Hello");
printLength([1, 2, 3, 4]);
