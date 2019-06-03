// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.


function isPrime(number){
    if(number === 1 ) return false;

    if(number === 2) return true;

    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }
    }

    return true;
}

// With the ES6 syntax:

const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
// You can also decrease the complexity of the algorithm from O(n) to O(sqrt(n)) if you run the loop until square root of a number:
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

// Then make a for loop to loop through the numbers 0 to 100 and test each number with that function. If it is prime, output the number to the log.
for(let i = 0; i < 100; i++){
    if(isPrime(i)) console.log(i);}

console.log("is prime : " + isPrime(4));