// Example string
const string1 = 'level';
const string2 = 'house';
const string3 = 'Level';
const isPalindrome = (string) => string == string.split('').reverse().join('');

// Test
isPalindrome(string1); // true
isPalindrome(string2); // false