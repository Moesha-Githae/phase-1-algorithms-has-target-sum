// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for(let i=0; i<array.length; i++){
//     const compliment = target - array[i]
//     for(let j=i+1; j<array.length; j++){
//       if (array[j] === compliment) return true
//     }
//   }
//   return false
// }


// solution using object
function hasTargetSum(array, target) {
  const seenNumbers = {}
  for(const number of array){
    // n steps
    const complement = target - number
    if(complement in seenNumbers) return true

    seenNumbers[array[i]] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  SOLUTION 1
  time: O(n^2)
  space: O(n)
  SOLUTION 2
  time: O(n)
  space:
*/

/* 
USING ARRAY
  Add your pseudocode here
  iterate thro each number in array
    for current num identify compliment adding up to target (target - current number)
    loop remaining elements of array
      if any num is compliment
        return true
  return fals if no num
  USING OBJECT
    initialize a new empty object
    loop through array elements
    find compliment of current number
    check if object contains a key of compliment
      return true
      else add number to seen numbers
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;