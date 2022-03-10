// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(num1, num2){
    let count = 0;
    for (let i = Math.abs(num1); i < Math.abs(num2)-1; i++){
        if (i % 2 === 1){
            console.log(count)
            count += 1; 
        }
    }
    return count
}

/* console.logs to test */
console.log("sumOfOdds");
console.log("12345678////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sumOfOdds(-1,-8))

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(arr1, arr2){
let firstItem = Math.abs(arr1[0])- Math.abs(arr2[0])
let seccondItem =  Math.abs(arr1[1])- Math.abs(arr2[1])
console.log(firstItem,seccondItem)
}

/* console.logs to test */
console.log("arraySubtract");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
arraySubtract([7,9],[5,2]) 
//should returns 7-5 = 2 && 9-2 = 7

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(arr, str1, str2){
   arr.unshift(str1)
   arr.push(str2)
   
   return arr
};

/* console.logs to test */
console.log("surroundArray");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(surroundArray([12345], "\n what is going on \n", "how are you?"))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(array) {
    let longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }


/* console.logs to test */
console.log("longestString");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(longestString(["hello", "zebra", "alphabet"]))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/



function sToR(str){
    let newStr = ""

    for (let i = 0; i < str.length; i++){
        if(str[i] === "s" || str[i] === "S"){
            (str[i] === "s") ? newStr += "r" : newStr += "R";
        }
        else if(str[i] === "r" || str[i] === "R"){
            (str[i] === "s") ? newStr += "S" : newStr += "s"
        }
        else{
            newStr += str[i]; 
        }
    }
    return newStr
}

/* console.logs to test */
console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sToR("Straiteners"))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num){
divisible4 = (num % 4 === 0) ? true : false;
divisble7 = (num % 4 === 0) ? true : false;

    if (divisible4 === true && divisble7 === true){
        return true
    }
    else{
        return false
    }
};

/* console.logs to test */
console.log("divisibleBy4And7");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(divisibleBy4And7(28))
console.log(divisibleBy4And7(27))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(str){

    let exclamationMark = false;
    let questionMark = false; 

    for (let i=0; i < str.length; i++){
        str[i] === "!" ? exclamationMark = true : str[i] = " ";
        str[i] === "?" ? questionMark = true : str[i] = " "
        
    }

    if(exclamationMark && questionMark){
        return true
    }else{
        return false
    }

};

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(exclamationAndQuestion("ques1okcr?"))
console.log(exclamationAndQuestion("q!ues1okc?r"))

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(strAB){
    let str = strAB.toUpperCase()
    console.log(str)
    let  countA = 0;
    let countB = 0; 
    arrA = [];
    arrB = [];

    for(i = 0; i < strAB.length; i++){
        str[i] === "A" ? countA += 1 : countA += 0;
        str[i] === "B" ? countB += 1 : countB += 0;   
        console.log(`Count A: ${countA} || Count B: ${countB}`)
    }
    arrA.push(countA);
    arrB.push(countB);
    let ABarray = arrA.concat(arrB)
    return ABarray
}

/* console.logs to test */
console.log("countAB");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(countAB("aaAbbbaaabBcdef"))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(){

}

/* console.logs to test */
console.log("addStringIfLastS");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(numArr){
    let smallest = numArr[0];
    if (numArr.length < 2){
        return undefined
    }
        
    for(let i=1; i<numArr.length; i++){
        if(numArr[i] < smallest){
            smallest = arr[i];   
        }
    }
    // console.log(smallest)
    let smallestIndex = numArr.pop(smallest)
    // console.log(smallestIndex)
    let combinedArr = []
    combinedArr.push(smallest)
    combinedArr.push(smallestIndex)
    return combinedArr
    
  }



 
console.log(twoSmallest([2,5,8,7]))

/* console.logs to test */
console.log("twoSmallest");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(twoSmallest([1,5,8,3]))

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

