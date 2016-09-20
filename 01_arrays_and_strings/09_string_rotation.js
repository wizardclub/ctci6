/*
1.9 String Rotation:

Assume you have a method isSubstring which checks if one word is a substring of another. 
Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only 
one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").
*/

function isSubstring(input, staticInput) {
    "use strict";
    
    if (input === staticInput) {
        console.log("Exact Match");
        return true;
    }
  
    if (input.length != staticInput.length) {
        console.log("Input length does not match staticInput length");
        return false;
    }
  
    var inputSort = input.split('');
    inputSort = inputSort.sort();
    inputSort = inputSort.toString();
        console.log("inputSort is " + inputSort);
    var staticInputSort = staticInput.split('');
    staticInputSort = staticInputSort.sort();
    staticInputSort = staticInputSort.toString();
        console.log("staticInputSort is " + staticInputSort);
  
    if (inputSort != staticInputSort) {
        console.log("Input does not have the same elements as staticInput");
        return false;
    }
  
    inputArr = input.split("");
    staticInputArr = staticInput.split("");
    var checkpoint = [];
  
    var j = 0;
    while (j < input.length) {
        var index = 0;
        index = input.indexOf(staticInput[0],j);
        checkpoint.push(index);
        j++;
    }
  
    checkpoint = checkpoint.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });
  
        console.log("checkpoints are " + checkpoint);
  
    for (var i = 0; i < checkpoint.length; i++) {
            console.log("Starting slice check");
        var currentCheck = checkpoint[i];
        var beginning = inputArr.slice(currentCheck);
        beginning = beginning.join('');
        var end = inputArr.slice(0, currentCheck);
        end = end.join('');
            console.log("beginning is " + beginning);
            console.log("end is " + end);
        if (beginning + end === staticInput) {
            console.log(beginning + end + " == " + staticInput);
        return true;
        }
    }
    return false;
  
}  

wordRotationCheck("ordw","word");
This looks like a JavaScript file. Click this bar to format it.No 4