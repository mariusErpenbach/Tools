  // check if word is a palindrome 
  const isPalindrome = (str) => {
    str = str.toLowerCase();
    for (let i = 0; i <= str.length; i++) {
      if (str[0] == str[str.length - 1]) {
        str = str.substring(1, str.length - 1);
      }
    }
    if (str.length == 0 || str.length == 1) {
      return true;
    } else {
      return false;
    }
  };
  let palindrome = "radar";
  console.log(isPalindrome(palindrome));
  console.log(isPalindrome("Anton"));
  console.log(isPalindrome("Anna"));