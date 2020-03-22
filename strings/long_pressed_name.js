/**

Problem: Given two strings, check if the second string meets the following requirements:
- same characters in same order as first string
- counts of all chars are equal to or greater than first string's chars
- sequence of chars are the same as first: 'alex' => 'aalleexx', not 'alex' => 'eellxxaa'

Essentially, check if long-pressing is the culprit for the differences between stringOne and stringTwo.

Examples: 'alex' => 'aalleex' TRUE because long pressing is same char repeated in correct sequence.
          'alex' => 'alaeex' FALSE because 'a' is not in the same sequence as in first string
          'saeed' => 'ssaaedd' FALSE because 'e' has less count than e in first string

DS: Keep the inputs as strings. Use a while loop to loop while the pointer for the first string is less than the length
of that string.

Algorithm: 
  - Create pointers for index in first string and second string. First is slow, second is fast.
  - For each char in first string, count the number of chars that match the first char until the next char at index + 1
  is not the same char.
  - If the char at the slow index in first string is not the same as char at fast index of second, return FALSE as this means
  the sequencing of chars is wrong.
  - Compare char count with the count of the same letter starting from fastIndex in second string until the next char
  is NOT the same as starting char.
  - If the second string's count is less than the first string's, return FALSE, as this means there aren't enough
  characters.
  - Else, reset count to 0 and start from next index of slow in first string.
  
 */
 
const isLongPressedName = function(name, typed) {
  const starts = [0, 0, 1, undefined];
  let [fast, slow, slowCount, fastCount] = starts;
  
  while (slow < name.length) {
    if (name[slow] !== typed[fast]) { 
      return false; 
    }
    
    if (name[slow] !== name[slow + 1]) {
      fastCount = getCount(typed.slice(fast), name[slow]);
      fast += fastCount;
      
      if (slowCount > fastCount) {
        return false;
      }
      
      slowCount = 0;
    } 
    
    slow += 1;
    slowCount += 1;
  }
  
  return true;
};

const getCount = function(word) {
  if (!word) { 
    return 0; 
  }
  
  let count = 0;
  let startingLetter = word[0];
  
  for (let i = 0; i < word.length; i += 1) {
    if (i === 0) {
      count += 1;
      continue;
    }
    
    if (word[i] === startingLetter) {
      count += 1;
    } else {
      break;
    }
  }
  
  return count;
};
