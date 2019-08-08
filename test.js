"use strict";

const User = function() {
	let userName;
	let userPassword;

	const login = function(name, pass) {
		userName = name;
		userPassword = pass;
		return 'Logged in!';
	}

	const getName = function() {
		return userName;
	}

	const getPassword = function() {
		return userPassword;
	}

	const publicApi = {
		login,
		getName,
		getPassword,
	}
	return publicApi;
};
