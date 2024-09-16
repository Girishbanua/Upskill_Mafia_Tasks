let a = 153;
let b = 407;

//sum of digits of a 153

let sum = 0;
let temp = a;
while (temp > 0) {
    sum += temp % 10;
    temp = (temp / 10) | 0;
}
console.log("Sum of digits of " + a + " is:"+sum);

//armstrong number

let armstrng = 0;
let rem = 0;
temp = a;
while(temp > 0){
    rem = temp % 10;
    armstrng = armstrng + (rem * rem * rem);
    temp = (temp / 10) | 0;
}
if( armstrng === a)
    console.log("It is an armstrong number");
else 
    console.log("It is not an armstrong number");

//prime number

let prime = false
for(let i = 2; i <= a; i++){
    if(a % i === 0)
    {
        prime = false
        break;
    }
    else
        prime = true
}
if(prime === false){
    console.log("It is not a prime number");    
}
else{
    console.log("It is a prime number");
}

//Factors

let factors = 0;
let fact = a;
console.log("The factors of " + fact + " are:");
for(let i = 1; i <= a; i++){
    if(a % i === 0){
        console.log(i);
    }
}


//Task 2
//sum of digits of a 
 sum = 0; temp = b;
while (temp > 0) {
    sum += temp % 10;
    temp = (temp / 10) | 0;
}
console.log("Sum of digits of " + b + " is:"+sum);

//armstrong number

armstrng = 0;
rem = 0;
temp = b;
while(temp > 0){
    rem = temp % 10;
    armstrng = armstrng + (rem * rem * rem);
    temp = (temp / 10) | 0;
}
if( armstrng === b)
    console.log("It is an armstrong number");
else 
    console.log("It is not an armstrong number");

//prime number
prime = false
for(let i = 2; i <= b; i++){
    if(b % i === 0)
    {
        prime = false
        break;
    }
    else
        prime = true
}
if(prime === false){
    console.log("It is not a prime number");    
}
else{
    console.log("It is a prime number");
}

//Factors

factors = 0;
fact = b;
console.log("The factors of " + fact + " are:");
for(let i = 1; i <= b; i++){
    if(b % i === 0){
        console.log(i);
    }
}