let num1 = 14;
let num2 = 7;
let num3 = 0;
let num4 = 10;
let num5 = 2;

const divNums = (x, y) => {
    return new Promise((resolve, reject) => {
        if(y === 0){
            reject("The second number is 0 and we Cannot divide by zero");
        }
        else{
            resolve("The division of " + x + " and " + y + " is " + x/y);
        }
    })    
}

divNums(num1, num2)
.then((result) => console.log(result))
.catch((err) => console.log(err))

divNums(num2, num3)
.then((result) => console.log(result))
.catch((err) => console.log(err))

const DivNumbers = async (a, b) => {
    try{
        const result = await divNums(a, b)
        console.log(result)        
    } catch(err){
        console.log(err)
    }
}

DivNumbers(num4, num5)