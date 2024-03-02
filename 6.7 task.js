'use strict'

const div = document.querySelector('.timer');

function timerNewYear(){
	let currentTime = new Date();
	let newYear = new Date(currentTime.getFullYear() + 1, 0, 1);

	let result = newYear - currentTime;

	let month = Math.floor(result / (60 * 60 * 24 * 30 * 1000) % 12);
	let days = Math.floor(result / (60 * 60 * 24 * 1000) % 30);
	let hours = Math.floor(result / (60 * 60 * 1000) % 24);
	let minutes = Math.floor(result / (60 * 1000) % 60);
	let seconds = Math.floor(result / (1000) % 60);
	
	div.textContent = `${month} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`
}

setInterval(timerNewYear, 1000);