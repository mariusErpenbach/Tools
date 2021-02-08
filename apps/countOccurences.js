function countOccurrences (string,letter) {  
    let occurrences = 0;                // set a var to count the occurences
  for (i=0;i<=string.length;i++){       // initialize a loop which runs as long as the string is
    if (string.charAt(i) == letter){    // controle in every iteration if the letter is at the charAt position 
      occurrences++                     // raise counter if its true
    }
  }
  return occurrences;                   
  }
  console.log(countOccurrences("this is a stringi", "i"));