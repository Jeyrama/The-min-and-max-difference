/*
Given two arrays of integers(arr1,arr2). 
Your task is going to find a pair of numbers
(an element in arr1, and another element in arr2), 
their difference is as big as possible(absolute value); 
Then, you should to find a pair of numbers, their difference is as small as possible. 
Return the maximum and minimum difference values by an array: [ max difference, min difference ]

For example:
  Given arr1 = [3,10,5], arr2 = [20,7,15,8]
  should return [17,2] because 20 - 3 = 17, 10 - 8 = 2

Note:
  arr1 and arr2 contains only integers (positive, negative, or 0);
  arr1 and arr2 may have different lengths, they always have at least one element;
  All inputs are valid.

Examples:
  maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
  maxAndMin([3],[20]) === [17,17]
  maxAndMin([3,10,5],[3,10,5]) === [7,0]
  maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]
*/


// Solution

function maxAndMin(arr1,arr2){
  return [
    Math.max( ...arr1.map(n => Math.max( ...arr2.map(m => Math.abs(n - m)) )) ),
    Math.min( ...arr1.map(n => Math.min( ...arr2.map(m => Math.abs(n - m)) )) )
  ]
}

// or

function maxAndMin(arr1,arr2){
  let min = Infinity; 
  let max = -Infinity;
  
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const diff = Math.abs(arr1[i] - arr2[j]);
      if (diff > max) max = diff
      if (diff < min) min = diff;
    }
  }
  
  return [max, min];
}