const form = document.getElementById('box');
const email =  document.getElementById('email');
const password =  document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


form.addEventListener('submit', function(event){
	let errorMessages = [];

	// Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        errorMessages.push("Please enter a valid email address.");
    }

	//Ensuring the password has valid input
	const passwordValue = password.value;
	if(passwordValue.length < 8){
		errorMessages.push("Your password must be at least 8 characters long.");
	}
	if(!/[A-Z]/.test(passwordValue)){
		errorMessages.push("Your password must contain at least one uppercase letter");
	}
	if(!/\d.*\d.*\d/.test(passwordValue)){
		errorMessages.push("Your password must contain at least three digits.");
	}
	if(!/[!@#$%^&*(),.?":{}|<>]/.test(passwordValue)){
		errorMessages.push("Password must contain at least one special character.")
	}

	// Checking if password and confirm password match
    if (passwordValue !== confirmPassword.value) {
        errorMessages.push("Passwords do not match.");
    }

	//Preventing the submission from processing if the user has an invalid input
	if(errorMessages.length > 0){
		event.preventDefault();
		alert(errorMessages.join('\n'))
	}
});