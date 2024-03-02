'use strict'

let arrayOfObject = [
	{id: 1, name: 'Vasya'},
	{id: 2, name: 'Petya'},
	{id: 1, name: 'Vasya'},
	{id: 3, name: 'Kolya'},
];

let filterArray = new Set(arrayOfObject.map(elem => arrayOfObject.find(item => item.id === elem.id)));

