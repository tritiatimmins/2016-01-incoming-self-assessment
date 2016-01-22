/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function(array, target) {
 // your code here

 //find the middle point in the array 
//define the base cases
//if the array has nothing in it return null. there is no target to find
	if(array.length === 0) {
		return null;
	}

	//add a case for if the target is smaller than the value at the first index
	if(target < array[0]){ 
		return null;
	}

	//add a case for if the target is larger than the value at the first index
	if(target > array.length) {
		return null;
	}
//if the middle value is equal to the target return the middle element and be done
//if the target is equal to array of middleindex then return the target
	var recursiveFunction = function(slicedArray) {
		
		//this has to be inside of the subroutine so that way the middle index will be reassigned at every recursive call
		var middleIndex = Math.floor(slicedArray.length - 1 / 2);
		
		//base case	inside the recursive case
		if(target === slicedArray[middleIndex]){
			//found = true;
			return middleIndex;
		

		//if the target is greater than the element of the middleindex, then the search upwards for the target
		//you would search for the target recursively
		//if the target is greater than the array[middleIndex]
		}if(target > slicedArray[middleIndex]){
			//recurse with a sliced array b/c slice will keep the array the same
			return recursiveFunction(slicedArray.slice(middleIndex, slicedArray.length - 1));
		
		//else if because the else if will be dependent on the if statement
		}else if (target < slicedArray[middleIndex]){
			//slice from the first item in the array to the middle index
			return recursiveFunction(slicedArray.slice(0, middleIndex));
		}
	}
		return recursiveFunction(array);

		//at the end we need to somehow return the index.
};