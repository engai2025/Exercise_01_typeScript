let productName: string = "HP Laptop";
let price: number = 200;
let discountAvailable: boolean = true;

function getDiscount(price: number, discount: number): number {
    return price - (price * discount) / 100;
}

function printLength(x: unknown): void {
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
 