// Assume mailing list is empty from the start
class NewsletterManager {
	constructor() {
		this.db = new NewsletterDatabase();
	}
	
	// returns true if user was added to firebase
	// throws Error('Already subscribed') if user already subscribed
	// return false if invalid name or emailAddress
	subscribeUser(name, emailAddress) {
		// this implementation is probably not going to pass testing...
		this.db.addUser(name, emailaddress);
	}
	
	// returns true if user was unsubscribed from firebase
	// throws Error('Not subscribed') if user not subscribed
	// return false if invalid emailAddress
	unsubscribeUser(emailAddress) {
		// this implementation is probably not going to pass testing...
		this.db.removeUser(name, emailaddress);
	}
}

// You are not allowed to change this class in this exercise
// Mock it instead!
class NewsletterDatabase {
	addUser(name, emailaddress) {
		throw new Error('You should not see this when testing');
	}
	
	doesUserExist(emailAddress) {
		throw new Error('You should not see this when testing');
	}

	removeUser(emailAddress) {
		throw new Error('You should not see this when testing');
	}
	
}