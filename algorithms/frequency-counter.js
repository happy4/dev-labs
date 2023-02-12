// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }
    const obj1 = {};
    const obj2 = {};
    for (let val of str1) {
        obj1[val] = obj1[val] ? ++obj1[val]  : 1;
    }
    for (let val of str2) {
        obj2[val] = obj2[val] ? ++obj2[val]  : 1;
    }
    for (var key in obj1) {
        if (!obj2[key]) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

