function findInputs() {
	var inputs = document.querySelectorAll('input');
	return Array.from(inputs);
}

function validateInputs() {
	var inputs = findInputs();
	var valid = true;
	inputs.forEach(function(input) {
		if (input.hasAttribute('required') && !input.value) {
			valid = false;
		}
	});
	return valid;
}

function login() {
	if (document.getElementById('remember-me').checked) {
		alert("Logged in successfully with Remember Me marked as set");
	} else {
		alert("Logged in successfully");
	}
}

function clear() {
    
	var inputs = findInputs();
	inputs[0].value = '';
    inputs[1].value = '';
    document.getElementById("remember-me").checked = false;
}

function loginClicked() {
	if (!validateInputs()) {
		alert("Please enter all required inputs");
		return;
	}
	login();
}

function cancelClicked() {
	clear();
}
