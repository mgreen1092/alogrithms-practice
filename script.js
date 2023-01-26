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

// Needs to have time and space O(N)

// I'm not sure how to represent variable numbers in arguments --> don't need to put anything in argument
function areThereDuplicates () {
    console.log(arguments)
    // always in an array
    // we need to first value of the array
    let left = 0
    // we need the last value of the array
    let right = arguments.length - 1
    // while left < right, if the values aren't equal, add one to left and compare
    while (left < right) {
        if (arguments[left] !== arguments[right]) {
            left ++
            // if they are equal return true
        } else {
            return true
        }
    }
    // outside of the while loop, return false
    return false
}
// console.log(areThereDuplicates(1, 2, 3))
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))

// Write a function called averagePair. Given a sorted array of intergers and a target average,
// getermine if there is a pair of values in the array where the average of the pair equals the 
// target average. There may be more than one pair that matches the average

// Multiple Pointer
// takes the first value of the array and last value, add them together and divide by 2
// to see if the avaerage is equal to the target average while the first index value is less 
// than the second index value
// If it isnt equal, add one to the right and do it again
// If it is equal return true
// Need to end with return false 

function averagePair(array, target) {
    // edge case to say if nothing in an array
    let left = 0
    let right = array.length - 1
    while (left < right) {
        let average = (array[left] + array[right])/2
        console.log(average)
        if (average > target) {
            console.log(array[right], 'RIGHT')
            right --
        } else if (average !== target) {
            console.log(array[left], 'ARRAY LEFT')
            left ++
        } else {
            return true
        }
    }
    return false 
}
// console.log(averagePair([1,2,3],2.5))
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
// console.log(averagePair([-1,0,3,4,5,6], 4.1))
// console.log(averagePair([-1,0,3,4,5,6], 4.1))

// Given an array of integers and a number, write a function
// called mzSubarraySum which finds the maximum sum of a subarray 
// with the length of the number passed to the function
// NOTE: a subarray must consisten of consecutive elements from 
// the original array

// Sliding Window - want a subset of the data that is continuous
// I will need a starting value at the first value of the array
// I will need the value of the array with length of the passed
// number
// I will need a sum value that loops through all the values until
// the length of the passed number

function maxSubarraySum (array, num) {
    let maxSum = 0
    let tempSum = 0
    if (array.length < num) return null
    for (let i=0; i<num; i++) {
         // sum the first two values
       maxSum += array[i]
    }
    tempSum = maxSum
    for (let i=num; i<array.length; i++) {
        // subtract the first number of the sequence and add one 
        // to the end
        tempSum = tempSum - array[i-num] + array[i]
        // if tempSum is larger than maxSum, it is now assgined 
        // to maxSum so we can return maxSum
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}
// console.log(maxSubarraySum([100,200,300,400], 2))

// Write a function called minSubArrayLen which accepts two parameters - an arroy of positive
// integers and a positive integer
// This function should return the minimallenth of a contiguous subarray which the sume is 
// greater than or equal too the integer passed to the function, if there isnt one, return 0 
// instead

function maxSubArrayLen () {
    // know this is a sliding window challenge because I am taking a subset of an array
    // I will need to loop throu
}

// Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all 
// non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// covert all letters to lowercase
// remove all spaces and punctuation
// multiple pointers - compares the first item and last item to see if it is the same, if not false, if it is the same, move each
// point inward one space

function isPalindrome(str) {
    // if there is one letter return true
    if (str.length === 0) {
        return true
    }
    let newStr=str.toLowerCase();
    let newStr2 = newStr.replace(/[\[\].'",\/#!$%\^&\*;:{}=\-_`~()@?\s]/g,"")
    console.log(newStr2)
    let left = 0
    let right = newStr2.length - 1
    console.log(newStr2[left])
    while (left < right) {
        // if the first and last letter are equal, then move each point inward and compare
        if (newStr2[left] === newStr2[right]) {
            right --
            left ++
        } else {
            return false
        }
    }
    return true
}
// console.log(isPalindrome("A man, a plan, a canal: Panam"))
// console.log(isPalindrome("Live on evasions? No, I save no evil."))

// Assessment
// input is a string as version1, version2
// return -1 when version1 is < version2
// return 0 when versions are equal
// return 1 when version1 > version2

function VersionCompare (version1, version2) {
    // how to compare 2 to 2.0.0 etc
    // remove the period to be able to compare numbers
   let version1Split = version1.replace(/[.]/g,"")
   let version2Split = version2.replace(/[.]/g,"")
   console.log(version1Split, version2Split, 'SPLIT')
//    Make the strings the same length to be able to compare
   if (version1Split.length < version2Split.length) {
    // insert 0's to however long version2Split is
        let x = version2Split.length
        let version1Split2 = version1Split.padEnd(x, '0')
        console.log(version1Split2, version2Split)
        // complete the return if statements
        if (version1Split2[version1Split2.length-2] < version2Split[version1Split.length-2]) {
            return 1
        }
        if (version1Split2 < version2Split) {
            return -1
        }
        if (version1Split2 > version2Split) {
            return 1
        }
        if (version1Split2 === version2Split) {
            return 0
        }
   }
//    if version2 length is greater than version1
   if (version2Split.length < version1Split.length) {
    // insert 0's to however long version2Split is
        let x = version1Split.length
        let version2Split2 = version2Split.padEnd(x, '0')
        console.log(version1Split, version2Split2)
        // complete the return if statements
        console.log(version2Split2[version2Split2.length-3])
        if (version2Split2[version2Split2.length-2] < version1Split[version1Split.length-2]) {
            return 1
        }
        if (version1Split < version2Split2) {
            return -1
        }
        if (version1Split > version2Split2) {
            return 1
        }
        if (version1Split === version2Split2) {
            return 0
        }
   }
//    if the lengths are equal
   if (version1Split.length === version1Split.length) {
    // need to account for when the last two digits are higher meaning a higher version
        if (version2Split[version2Split.length-2] > version1Split[version1Split.length-2]) {
            return 1
        }
        if (version1Split < version2Split) {
            return -1
        }
        if (version1Split > version2Split) {
            return 1
        }
        if (version1Split === version2Split) {
            return 0
        }
       
    }
}

console.log(VersionCompare('2.10.0.1.5', '2.1.0.50'))