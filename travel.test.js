const Travel = require('./travel.js');

describe('Travel', () => {
	/*
	getLocation
	- initial location: null
	- setOrigin, vi är på origin
	- setOrigin, bookTrip, goOnTrip, vi hamnar på destinationen
	*/
	
	test('getLocation, initial location: null', () => {
		let t = new Travel();
		expect( t.getLocation() ).toBe( null );
	})
	
	test('getLocation, setOrigin is at origin', () => {
		const location = 'Göteborg';
		let t = new Travel();
		t.setOrigin(location);
		expect( t.getLocation() ).toBe( location );
	})
	
	test('getLocation, after travelling we should be at destination', () => {
		const origin = 'Kuala Lumpur', destination = 'New York';
		let t = new Travel();
		t.setOrigin(origin);
		t.bookTrip(destination);
		t.goOnTrip();
		expect( t.getLocation() ).toBe( destination );
	});
	
	test('getLocation, after failed travelling we should remain at origin', () => {
		const origin = 'Kuala Lumpur', destination = 'New York';
		let t = new Travel();
		t.setOrigin(origin);
		//t.bookTrip(destination);
		// try catch finally
		try {
			t.goOnTrip();
		} catch(err) {}
		expect( t.getLocation() ).toBe( origin );
	});
	
	/*
	setOrigin
	- before traveling
	- after traveling
	- invalid parameter
	*/
	test('setOrigin, before traveling updates origin', () => {
		const location = 'Rom';
		let t = new Travel();
		t.setOrigin(location);
		expect( t.getLocation() ).toBe( location );
	});
	
	test('setOrigin, after traveling should throw Error', () => {
		const origin = 'Rom', destination = 'Oslo';
		let t = new Travel();
		t.setOrigin(location);
		t.bookTrip(destination);
		t.goOnTrip();
		expect( () => {t.setOrigin('Stockholm')} ).toThrow();
	});
	
});





