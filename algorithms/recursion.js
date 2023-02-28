// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

//1st variant
function reverse1(str){
    if (str.length === 0) {return '';}
    let arr = [...str];
    let lastEl = arr.splice(-1);
    return lastEl.concat(reverse1(arr.join(''))).join('');
}

reverse1('awesome') // 'emosewa'

// awesome -> a
// wesome -> w
// esome -> e
// some -> s
// ome -> o
// me -> m
// e -> e

// emosewa
//2nd variant
function reverse2(str){
  console.log(str);
	if(str.length <= 1) return str;
	return reverse2(str.slice(1)) + str[0];
}

reverse2('awesome') // 'emosewa'


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    if (str.length < 2) return false;
    function equal(a, b) {
        return a === b;
    }
  return equal(str[0], str.slice(-1))
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('tacocat'));
