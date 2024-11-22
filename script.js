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

// console.log(VersionCompare('2.10.0.1.5', '2.1.0.50'))

// Recrusive Factorial Problem
function factorial (num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}
// console.log(factorial(4))

// Recursion - Power:
// Write a function called power which accepts a base and an exponent. The function should return 
// the power of the base to the exponent. This function should mimic the functionality of 
// Math.pow()  - do not worry about negative bases and exponents.

function power (base, exp) {
    if (exp <= 0) return 1
    return base ** power(base,exponent - 1)
}
// console.log(power(2, 4))
// Recurion - Product of Array
// write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArray (arr) {
    if (arr.length === 0) return 1
    // need to take the first value of the array and then slice it out and repeat the process
    return product = arr[0] * productOfArray(arr.slice(1))
}
// console.log(productOfArray([1, 2, 3]))

const formatDate = (dateInput) => {
    // write your code here
    // use the Date method to get year, month, day
    let date = new Date(dateInput);
    // separate year month day to be able to conjoin later
    let year = date.getFullYear()
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    
    if (month.length < 2) {
      month = '0'+ month
    }
    if (day.length < 2) {
      day = '0' + day
    }
    // conjoin year month day to correct format, need to include -
    return [year, month, day].join('-')
  }
// console.log(formatDate("3/17/1888"))  

// Linear Search
// function accepts an array and a value 
// loop through the array and check if the current array 
// element is equal to the value
// if it is, return the index at which the element is found

function linearSearch(arr, num) {
    for (let i=0; i<=arr.length; i++) {
        if (arr[i] === num) {
            return arr.indexOf(num)
        } 
        return -1
    }
}
// console.log(linearSearch([1, 2, 3, 55], 55))

// Binary Search
// accepts a sorted array and a value youre looking for
// create two variables, left and right for beginning and end of array
// while the left pointer is less than the right:
    // make a pointer in the middle
    // if you find the value you want, return the index
    // if the value is too small, move the left pointer up
    // if the value is too large, move the right pointer down
// if the value isnt there, return -1
function binarySearch (arr, val) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end)/2)
    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle + 1
        else start = middle + 1
        middle = Math.floor((start+end)/2)
    }
    return arr[middle] === val ? middle : -1 
    }
    // let left = 0
    // let right = arr.length - 1
    // let mid = Math.floor((left + right) / 2)
    // while (arr[mid] !== val) {
    //     console.log(left, mid, right)
    //     if (val < arr[mid]) {
    //         right = mid - 1
    //     } else {
    //         start = mid + 1
    //     }
    //     mid = Math.floor((left + right) / 2)
    // } 
    // console.log(left, mid, right)
    // return mid
// console.log(binarySearch([1, 2, 3, 4, 5], 2))

// Naive string search
// Loop over the longer string
// Loop over the shorter string
// if the characters dont match, break out of the inner loop
// if the characters do match, keep going
// if you complete the inner loop and find a match, incrememnt the count of the matches

function stringSearch (string, val) {
    let count = 0
    for (let i=0; i<string.length; i++) {
        for (let j=0; j<val.length; i++) {
            console.log(string[i], val[i])
            // first letter of string is the same for the length of val
            if (string[i+j] !== val[j]) {
                // need to add i and j because of nested loops, this allows string to go to the next index to compare
                break
            }
            if(j===val.length - 1) {
                // when we get to the end of the value, we know we have a match
                count ++
            }
        }
    }
    return count 
}
// console.log(stringSearch('lorie loled', 'lol'))

// Bubble sort
// Start looping with a variable called i in the end of the array towards the beginning
// start an inner loop with a variable called j from the beginning until i-1
// if arr[j] is greater than arr[j+1], swap those two values 
// return sorted array

// function bubbleSort (arr) {
//     for (let i=0; i<arr.length; i++) {
//         for (let j=0; j<arr.length; j++) {
//             if (arr[j] > arr[j+1]) {
//                 console.log(arr[j], arr[i])
//                 // Swap
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }
function bubbleSort (arr) {
    let noSwaps
    for (let i=arr.length; i>0; i--) {
        // noSwaps starts at true
        noSwaps=true
        for (let j=0; j<i-1; j++) {
            // this allows the loop to run fewer times
            if (arr[j] > arr[j+1]) {
                console.log(arr[j], arr[i])
                // Swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                // if the steps above were completed, a swap was done
                noSwaps=false
            }
        }
        if (noSwaps) break
    }
    return arr
}

// console.log(bubbleSort([5, 4, 3, 2, 1]))

// Selection Sort
// store the first element as the smallest value you've seen so far
// compare this item ot the next item in the array until you find a smaller number
// if a smaller number is found, designate that smaller number to be the new min and continue until the end of the array
// if the minimum is not the value (index) you initially begain with, swap the two values
// repeat this with the next element until the array is sorted

function selectionSort (arr) {
    for (let i=0; i<arr.length; i++) {
        let lowest = i
        for (let j=i+1; j<arr.length; j++) {
            console.log(arr[j], arr[j+1])
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if (i !== lowest ) {
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}
// console.log(selectionSort([3, 5, 1, 8]))

// Insertion Sort 
// Start by picking the second element in the array
// Compare it to the one before and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (left side) to place the element in the correct order

function insertionSort(arr) {
    for (let i=1; i<arr.length; i++) {
        let currentVal = arr[i]
        for (let j=i-1; j>=0 && arr[j] > currentVal; i--) {
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentValn
    }
    return arr
}
// console.log(insertionSort([3, 5, 2, 1]))

// Sliding window example

function maxProfit (prices) {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right
      }
      right++;
    }
    return max_profit;
  };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))

// Merge function
// Create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't looked at:
//   If the value in the first array is smaller than the value in the second array, push the value in the first array into our
//   results and move on to the next value
//   If the value in the first array is larger than the value in the second array, push the value in the second array into our 
//   results and move on tot he next value in the second array
//   Once we exhaust one array, push in all remaining values from the other array

function merge (arr1, arr2) {
    let i = 0
    let j = 0
    let results = []
    while (i < arr1.length && j<arr2.length) {
        console.log(arr1[i])
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++
        } else if (arr1[i] > arr2[j]) {
            results.push(arr2[j])
            j++
        }
    }
    while (i< arr1.length) {
        results.push(arr1[i])
        i++
    }
    while (j<arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}
// console.log(mergeSort([1, 5, 8], [2, 4, 10]))

// Two Sum II - Input Array Is Sorted
function twoSum (numbers, target) {
    let i = 0
    let j = numbers.length - 1
    let results = []
    console.log(i, j)
    while (i < j) {
        console.log(i, j)
        if (numbers[i] + numbers[j] === target) {
            results.push([i+1, j+1])
            return results
        }
        if (numbers[i] + numbers[j] > target) {
            j--
        } 
        if (numbers[i] + numbers[j] < target) {
            i++
        } 
    }
}
// console.log(twoSum([2, 7, 11, 15], 9))

// Merge Sort
// Break up the array into halves until you have arays that are empty or have one element (slice)
// once you have smaller sorted arraysm merge those arrays with other sorted arrays until you
// are back at the full lenght of the array
// Once the array has been merged back together, return the merged (and sorted!) array

function mergeSort (arr) {
    if (arr.length <= 1) return arr
    let middle = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))
    return merge(left, right)
    
}
// console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]))

// Pivot Helper
// In order ti implement merge sort, it is useful to first implement a function responsible
// for arranging elements in an array on either side of a pivot
// Given an arry, this helper function should designate an element as the pivot
// It should then rearrange elements in the array so that all values less than the pivot are 
// moved to the left of the pivot, and all values greater than the pivot are moved to the right 
// of the pivot
// The order of the elements on either side of the pivot doesn't matter
// The helped should di this in place and don't make a new array
// When complete it should return the index
// picking the pivot is important, the runtime depends in part on how one selects the pivot
// Ideally the pivot should be chosen so that it isi roughly the median value in the data set 
// you're sorting
// For simplicity, we will always choose the pivot to be the first element 
// Function will accept three arguments: an array, a start index, and an end index
// Grab the pivot from the start of the array
// store the current pivot index in a variable (this will keep track of where the pivot should
// end up)
// Loop through the array from the start until the end
    // if the pivot is greater than the current element, incremement the pivot index variable
    // and then swap the current element with the element at the pivot index
// Swap the starting element (pivot) with the pivot index
// Return the pivot index

function pivot (arr, start=0, end=arr.legnth+1) {
    // bring in swap function
    function swap (arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    let pivot = arr[start]
    // swapIndex will keep track of swap whe comparing
    let swapIndex = start
    for (let i=start+1; i<arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex += 1
            swap(arr, swapIndex, i)
        } 
    }
    swap(arr, start, swapIndex)
    return swapIndex

}
// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))

// Quick Sort Pseudocode
// Call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursively call the pivot helper on
// the subarray to the left of that index, and the subarray to the right of that index

function quickSort(arr, left=0, right=arr.length-1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left=0, pivotIndex -1)
        // right
        quickSort(arr, pivotIndex+1, right)
    }
    return arr
}
// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))

// Radix Sort Helpers
function getDigit (num, i) {
    // console.log(num)
    // let numString = num.toString().split("").reverse().join("")
    // console.log(numString)
    // return numString[place]
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}
// console.log(getDigit(12345, 0))
// Digit Count Helper Function - returns the number of digits in num
function digitCount (num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
function mostDigits (arr) {
    let maxDigits = 0
    for (let i=0; i<arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits
}
// Define a function that accepts a list of numbers
// Figure out the largest number of digits
// Loop from k = 0 up to the largest number of digits
// for each iteractio of the loops;
    // create buckets fro each digit (0 to 9)
    // place each number in the corresponding bucket
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// return list at the end

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    console.log(maxDigitCount)
    for (let k=0; k<maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i=0; i<nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}
// console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))

// ThreeSum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

function threeSum (nums) {
    // need to identify three pointers
    // pointer values cannot equal each other
    // if the combination does not equal 0, adjust the pointers 
    // return array of values that add to 0, can be more than one array
    const results = []
    if (nums.length < 3) return results
    nums = nums.sort((a, b) => a - b)
    console.log(nums)
    let target = 0
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > target) break
        if (i > 0 && nums[i] === nums[i-1]) continue
        let j=i+1
        let k=nums.length - 1
        while (j<k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === target) {
                results.push([nums[i], nums[j], nums[k]])
                while(nums[j] === nums[j + 1]) j++
                while(nums[k] === nums[k-1]) k++
                j++
                k--
            } else if (sum < target) {
                j++
            } else {
                k--
            }
        }
    }
  return results
   
}

// console.log(threeSum([-1,0,1,2,-1,-4]))

// Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in an array
// and return false if every element in distinct

function containsDuplicates(nums) {
    console.log(nums);
    // let obj = {}
    // for (let val of nums) {
    //     obj[val] = (obj[val] || 0) + 1
    //     console.log(obj[val])
    //     if (obj[val] !== 2) {
    //         return false
    //     }
    //     return true
    // } 
    // console.log(obj, 'OBJ')
    // for (let key in obj) {
    //     if (key !== 2) return false 
    //     else return true
    // } return true 
    // let i = 0
    // console.log(nums[i])
    // for (let j=1; j<nums.length; j++) {
    //     console.log(nums[j])
    //     console.log(nums[i], nums[j], 'COMPARE')
    //     if (nums[i] !== nums[j]) {
    //         j++
    //     } else {
    //         return true
    //     }
    // }
    // return false
    // let i = 0
    // let j = nums.length - 1
    // while (i<j) {
    //     if (nums[i] === nums[j]) return true
    //     else if (nums[i] < nums[j]) j--
    //     else i++
    // }
    // return false
    return new Set(nums).size !== nums.length
}
// containsDuplicates([ 1, 2, 3, 4 ])

// JavaScript classes example
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName
        // this refers to the individual instance or object of the class, so the 
        // individual student
        this.lastName = lastName
        this.grade = year
        this.tardies = 0
        // whenever we make a new student, tardies is automatically set to 0
        this.scores=[]
    }
    fullName () {
        return `Your full name is ${this.firstName} ${this.lastName} has been late 
        ${this.tardies} time(s)`
    }
    markLate() {
        this.tardies += 1
        // refernecing the individual student 
        if (this.tardies >= 3) {
            return "You are explelled!!"
        }
        return `${this.firstName} ${this.lastName}`
    }
    addScore(score) {
        this.scores.push(score)
        // adds whatever is passed through as score to the end of the array
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a, b){return a + b})
        // Reduce: a is the accumulator and b is the current value
        return sum / this.scores.length
    }
    static enrollStudents() {
        return "ENROLLING STUDENTS"
    }
}
// defined the Student class patterns, the parameters in the contructor
// include all the properties we want to include

let firstStudent = new Student("Colt", "Steele", 15)
let secondStudent = new Student("Blue", "Steele", 12)
firstStudent.fullName()
// defining a class doesn't do much, we need to instantiate instances with 
// the new keyword
Student.enrollStudents()
// static method is not relevant to an individual instance but still want it as part of the 
// student class

// Leetcode - Sliding Window
// one variable at index 0
// for loop going through the string
// compare index 0 to index 1 in for loop
// if different put them in an array and count aray
// if not different, index variable increases
function lenghtOfLongestSubstring (s) {
    let longest = 0
    let seen = {}
    let start = 0
    for (let i=0; i<s.length; i++) {
        let char = s[i]
        console.log(char)
        if (seen[char]) {
            console.log(seen[char])
            start = Math.max(start, seen[char])
        }
        // index-beginning of subtring + 1(to include current in count)
        longest = Math.max(longest, i-start+1)
        // store the index of the next char so you don't double the count
        seen[char] = i+ 1
    }
    return longest
}
// lenghtOfLongestSubstring("abcabcbb")

// Singly Linked List


// Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 
// itself.
// Definition for singly-linked list.
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0); // Dummy node to simplify result list construction
    let current = dummy;        // Pointer to the current node in the result list
    let carry = 0;              // Initialize carry to 0

    // Iterate while there are nodes in l1, l2, or there's a carry
    while (l1 || l2 || carry) {
        // Get values from current nodes (default to 0 if node is null)
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        // Compute the sum and carry
        let total = val1 + val2 + carry;
        carry = Math.floor(total / 10);  // Update carry
        let currentDigit = total % 10;  // Get the current digit

        // Add the current digit as a new node
        current.next = new ListNode(currentDigit);
        current = current.next;

        // Move to the next nodes in l1 and l2, if available
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next; // Return the result list, skipping the dummy node
};


