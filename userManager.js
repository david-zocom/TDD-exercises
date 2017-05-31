/*
1. Write test cases for the functions: ??? (red)
2. Implement the functions (green)
3. Start from 1!
*/

/*
Write test cases for the class UserManager. However, this class needs to use the FirebaseUsers class - but we don't want to add and remove real users when testing this class. You must replace FirebaseUsers with a mock object.
*/
class UserManager {
	/*
	Create an object like this:
	let db = new FirebaseUsers();
	let um = new UserManager(db);
	*/
	constructor(userDatabase) {
		// Create class variables here
		this.userDb = userDatabase;
		throw new Error('Not implemented yet');
	}
	
	/*
	Return true if registration successful, false otherwise.
	Throw an Error if either of the parameters are invalid.
	*/
	registerUser(username, password) {
		// ... your code here ...
		// When you write test cases, you will discover that this function isn't finished yet. You may only add lines above this comment.
		return this.userDb.addUser(username, password)
	}
	
	/*
	Returns true if user exists, false otherwise.
	Throw an Error if parameter invalid.
	*/
	doesUserExist(username) {
		// ... your code here ...
		// When you write test cases, you will discover that this function isn't finished yet. You may only add lines above this comment.
		return this.userDb.userExists(username);
	}
	
	/*
	Returns true if user was removed, false otherwise.
	Throws an Error if parameter invalid.
	*/
	removeUser(username) {
		// ... your code here ...
		// When you write test cases, you will discover that this function isn't finished yet. You may only add lines above this comment.
		return this.userDb.removeUser(username);
	}

	// Optional: write test cases and implementation for the following functions
	changeUser(username, newUsername, newPassword) {
		throw new Error('Not implemented yet');
		// use changeUser
	}
	loginSuccessful(username, password) {
		throw new Error('Not implemented yet');
		// use verifyPassword
	}
}


/*
Don't write any tests for this class!
*/
class FirebaseUsers {
	addUser(username, password) {throw new Error(failMsg);}
	removeUser(username) {throw new Error(failMsg);}
	userExists(username) {throw new Error(failMsg);}
	
	// Optional
	verifyPassword(username, password) {throw new Error(failMsg);}
	changeUser(username, newUsername, newPassword) {throw new Error(failMsg);}
}
const failMsg = 'If you see this, you have failed this exercise';
