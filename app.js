//creating a map
// key value pairs, except the keys can be ANYTHING we want. 
//Conversely Objects' keys and values are stored as strings.
//finding size is easy

const myMap = new Map();

myMap.set('key', 'value');


//sets
//sets are useful for checking if an item is in a collection much more efficiently  
// than arrays.
// seeing as a set only accepts unique values. No duplicates allowed!


//---------------------------------------------------------

//Exercises 

//Quick Question #1
//What will this return?
new Set([1,1,2,2,3,4]);
/* removes duplicates and returns a set of {
    0:1,
    1:2,
    2:3,
    3:4
}
*/

//Quick question #2
//What will this return?
[...new Set("referee")].join("");
/*
removes duplicates, and joins the letters and returns the string
"ref" 
*/

/* 
Quick Questions #3
What does the Map ***m*** look like after running the following code?
*/ 
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// there will be two key value pairs. one will be true, one will be false. I think
// because they are regerencing differrent arrays.


// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount
function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }
