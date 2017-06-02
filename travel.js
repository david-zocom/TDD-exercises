class Travel {
	constructor() {
		this.origin = null;
		this.destination = null;
		this.location = null;
	}
	// Returns the current location
	getLocation() {
		return this.location;
	}
	
	// Sets the destination
	// Only works before travelling
	bookTrip(destination) {
		this.destination = destination;
	}
	
	// Sets the origin
	// Only works before travelling
	setOrigin(origin) {
		if( this.location === this.destination && this.location !== null )
			throw new Error('Can only set origin before traveling');
		this.origin = origin;
		this.location = origin;
	}
	
	// Moves from origin to destination
	// Should throw an Error if origin or destination has not been set
	// Origin and destination also need to be different strings
	goOnTrip() {
		if( this.origin !== null && this.destination !== null )
			this.location = this.destination;
		else
			throw new Error('Invalid origin or destination');
	}
}

module.exports = Travel;




