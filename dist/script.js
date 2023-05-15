// Simple Form Validation
const output = document.querySelector('.output');

document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	let msg;

	if (!e.target.firstElementChild.value) {
		msg = 'Please enter your email.';
		e.target.firstElementChild.style.outline = '1px solid lime';
	} else {
		msg = 'Thank you for your submission!';
	}

	output.textContent = msg;
});
