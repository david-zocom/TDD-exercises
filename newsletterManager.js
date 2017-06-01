// Assume mailing list is empty from the start
class NewsletterManager {
	constructor() {
		this.db = new NewsletterDatabase();
	}
	
	// returns true if user was added to firebase
	// return false if user already subscribed
	// throws Error('Invalid parameter(s)') if invalid name or emailAddress
	subscribeUser(name, emailAddress) {
		// this implementation is probably not going to pass testing...
		if( this.db.doesUserExist(emailAddress) )
			return false;
		return this.db.addUser(name, emailAddress);
	}
	
	// returns true if user was unsubscribed from firebase
	// return false if user not subscribed
	// throws Error('Invalid parameter(s)') if invalid emailAddress
	unsubscribeUser(emailAddress) {
		// this implementation is probably not going to pass testing...
		return this.db.removeUser(name, emailAddress);
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

module.exports = NewsletterManager;
