const equalOccurences = (string, ...checkChars) => {
console.log(checkChars)

    let xOccurences = string.split(char1).length-1 
    let yOccurences = string.split(char2).length-1 
    if (xOccurences === yOccurences) { return true} // check if  'x' and 'o' have the same number in the string.
    else return false;
    }
    console.log(equalOccurences("hello","i","o"));