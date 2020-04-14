/**
 * @param {string} s
 * @return {boolean}
 problem: tell if string is the same backwards and forwards, true or false
 - palindrome
 - ignore cases and whitespace or punctuation
 
 */
var isPalindrome = function(s) {
  let newS = s.toLowerCase();
  let modString = '';
  let rString;
  
  modString = newS.replace(/\W/g, '');
  rString = modString.split('').reverse().join('');
  
  return rString === modString;
};