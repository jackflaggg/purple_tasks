'use strict'

function validateDate(stringDate){
	let res = (new Date() - new Date(stringDate)) / (1000 * 3600 * 24 * 365)
	return Math.trunc(res) > 14 ? true : false;
}

console.log(validateDate('2010-09-23'));