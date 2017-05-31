// Assume mailing list is empty from the start
class NewsletterManager {

	// returns true if user was added to firebase
	// throws Error('Already subscribed') if user already subscribed
	// return false if invalid name or emailAddress
	subscribeUser(name, emailAddress) {
		throw new Error('Not implemented yet');
	}
	
	// returns true if user was unsubscribed from firebase
	// throws Error('Not subscribed') if user not subscribed
	// return false if invalid emailAddress
	unsubscribeUser(emailAddress) {
		throw new Error('Not implemented yet');
	}
}