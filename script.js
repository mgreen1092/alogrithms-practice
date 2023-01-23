// BIG O NOTATION

// Timing our code
//Leetcode longest common prefix
var longestCommonPrefix = function(strs) {
    let cur = strs[0]
    let temp = ""
    for (let i=1; i < strs.length; i++) {
        for (let j=0; j < cur.length; j++) {
            if(cur[j] == strs[i][j]) {
                temp += cur[j]
            } else {
                break
            }
        }
        console.log(temp)
        cur = temp
        temp = ""
    }
    return cur
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))

//Leetcode Valid parenthese
var isValid = function(s) {
    //needs to start with an open parantheses
    //if the string has ( it needs to have )
    //If string has { it needs to have }
    //if string has [ it needs to have ]
    //if the character at position 1 is either (, {, or [ then go on to the if else statements
    // console.log(s.charAt(0))
    // Initialize stack to store the closing brackets expected...
    let stack = [];
    // Traverse each charater in input string...
    for (let i = 0; i < s.length; i++) {
        // If open parentheses are present, push it to stack...
        if (s[i] == '{') {
            stack.push('}');
        } else if (s[i] == '[') {
            stack.push(']');
        } else if (s[i] == '(') {
            stack.push(')');
        }
        // If a close bracket is found, check that it matches the last stored open bracket
        else if (stack.pop() !== s[i]) {
            return false;
        }
    }
    return !stack.length;
};
// console.log(isValid("{[]}"))

// Frequency counter challenge
// Given two strings, write a function to determine if the second string is an anagram of the
// first. An anagram is a word, phrase, or name formed by re-arranging the letters of another
// such as cinema and iceman.

function isAnagram (str1, str2) {
    //if they don't have the same amount of letters then it cant be an anagram
    if (str1.length !== str2.length) {
        return false
    }
    //set up objects to be able to compare keys and values
    let str1Counter = {}
    let str2Counter = {}
    //can do for of loops for iterable objects including strings
    //sets the key value pairs for str1Counter and str2Counter
    for (let val of str1) {
        str1Counter[val] = (str1Counter[val] || 0) + 1 
    }
    for (let val of str2) {
        str2Counter[val] = (str2Counter[val] || 0) + 1
    }
    // console.log(str1Counter)
    // console.log(str2Counter)
    //is the key in str1Counter in str2Counter? If not then return false
    for (let key in str1Counter) {
        if (!(key in str2Counter)) {
            return false
        }
        //check to see if the values of the letters correspond
        if (str2Counter[key] !== str1Counter[key]) {
            return false
        }
    }
    return true
}

// console.log(isAnagram('cat', 'tac'))

// Count Unique Values

function countUniqueValues (arr) {
    if (arr.length === 0) {
        return 0
    }
    var i = 0
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}
// console.log(countUniqueValues([1, 1, 1, 2]))

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// use an object to compare values

function sameFrequency(num1, num2) {
    // can I compare length of numbers? Need to convert to string to
    // compare length
    // Need to first compare lengths - if not the same length, return false
    let str1 = num1.toString()
    let str2 = num2.toString()
    if (str1.length !== str2.length) {
        return false
    }
    // set up the object
    const obj = {}
    // loop over first string
    for (let i=0; i<str1.length; i++) {
        let number = str1[i]
        // if the number is in the object, then add 1, if not assign the number to 1
        obj[number] ? obj[number] += 1 : obj[number] = 1
    }
    // loop through second string
    for (let i=0; i<str2.length; i++) {
       let number = str2[i]
    //    if obj doesnt have the number, return false
       if (!obj[number]) {
        return false
       } else {
        // if the obj does have the string, subject one, this helps because 
        // if there is another value that doesn't match, but is already in 
        // the number, 0 will return falsy
        // Example: 1885, 1888 --> 5 will still have a 1 assigned to it, 
        // but by the time we get to the third 8, the value is already 0
        obj[number] -= 1
       }
       return true
    }
}
// console.log(sameFrequency(182,281))
// console.log(sameFrequency(34,14))

// Implement a function called, areThereDuplicates which accepts a variable 
// number of arguments, and checks whether there are any duplicates among 
// the arguments passed in.  You can solve this using the frequency counter 
// pattern OR the multiple pointers pattern.