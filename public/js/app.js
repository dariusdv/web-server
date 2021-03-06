const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const location = search.value;

	messageOne.textContent = 'Loading message...';
	messageTwo.textContent = '';

	fetch(`/weather?address=${location}`).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				messageOne.textContent = 'Error in client side js/app.js';
			} else {
				messageOne.textContent = `${data.forecast}`;
				messageTwo.textContent = `${data.location}`;
			}
		});
	});
});
