/*
 * Performs quick sort on  array
 * @param {array} array - array, array of integers.
 * @returns {array} Array of sorted integers
 */

function quickSort(array) {
	// check if aray is empty
	if (array.length === 0) {
		return [];
	}

	// choose first integer as pivot
	var pivot = array[0];
	// stores integers less than pivot
	var left = new Array();
	// stores integers greater than pivot
	var right = new Array();

	for (var i = 1; i < array.length; i++) {
		// check if current integer is less than pivot
		if (array[i] < pivot) {
			left.push(array[i]);
		}
		else {
			right.push(array[i]);
		}
	}

	// recursive call
	return quickSort(left).concat(pivot, quickSort(right));

}

array = [5, 0, 1, 8, 7];
quickSort(array);