const validPin = (number) => {
    if (number / number != 1) return false; // check if its a number 
    if ((number % 10) % 2 > 0) return false; //check last number
    if (number - 1000 < 0) return false; //not less then 4 digits
    if (number + 1 > 10000) return false; //not more than 5 digits
    if (number.toString().split("").reverse().join() === number.toString().split("").join()) return 'no valid pin'  // check if number has atleast one different digit
    return true;
}
console.log(validPin(4444)) // -> returns false - no different digits
console.log(validPin(4421)) // -> returns false - last digit is odd
console.log(validPin(4228)) // -> returns true 