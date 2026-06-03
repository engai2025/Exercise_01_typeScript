 
## TypeScript Exercise 1
 
  
  ## Developer Name: Eng Abdirahman Ai
  
  ***
  
  ## Group A
  
  ***
  
  [GitHub Link](https://github.com/engai2025/FullStackProject)
  
  ***
  ## Code

  ***
  ```typeScript
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
 


  ```
  ***
 
  
 

## Output 1
  
  ***
 
  ![Output The Code](Screenshot%202026-06-03%20020643.png)
 
 
   
 
  ***


 


 
 
  
  ***
  
  ## Programming Language Used
  
  ***
  
  | Programming Language | Framework | Database |
  |:--------------------|:----------|:---------|
  |  TypeScript|         0  |       0 |
  
  ***
  
  ## Task
  
  - [x] Done
  
  