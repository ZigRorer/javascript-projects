//let str = 'tacocat';

//function reverse(str) {return str.split('').reverse().join('');}

//function isPalindrome(str) {return reverse(str) === str;}


function reverse(str) {
   let reversed = '';

   for (let i = 0; i < str.length; i++) {
       reversed = str[i] + reversed;
   }
   return reversed;
}

function isPalindrome(str) {
   return reverse(str) === str;
} 

console.log(isPalindrome('tacocat'));
console.log(isPalindrome('ziggie'));