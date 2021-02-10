const isStrStartOfWord = (keyletters,word)=> {
    if (keyletters === word.substring(0,keyletters.length)){        //substring words 0 to keyletters length to always search for the entire keyletters string in the beginning of the word 
      return true
    } else return false;
 }
console.log(isStrStartOfWord("bu","button"));