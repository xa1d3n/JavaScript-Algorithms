/*
 * Performs binary search on ordered array of integers.
 * @param {array} array - array, sorted array of integers.
 * @param {target} integer - index, index of target value within array
 * @returns {integer} -1 if target value is not found or index of target value in array
 */

 function binarySearch(arr, target) {

 	var min = 0;
 	var max = arr.length - 1;
 	var guess;

 	while (max >= min) {
 		// median array index
 		guess = Math.floor((max + min) / 2);

 		// return if guess equals target value
 		if (arr[guess] === target) {
 			return guess;
 		}
 		// check if guess lower than target
 		else if (arr[guess] < target) {
 			min = guess + 1;
 		}
 		// check if guess greater than target
 		else {
 			max = guess - 1;
 		}
 	}

 	// target not found
 	return -1;
 }

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
binarySearch(primes, 37);
