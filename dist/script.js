// Simple Form Validation
const output = document.querySelector('.output');

document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	let msg;

	if (!e.target.firstElementChild.value) {
		msg = 'Please enter your email.';
	} else {
		msg = 'Thank you for your submission!';
	}

	output.textContent = msg;
});
