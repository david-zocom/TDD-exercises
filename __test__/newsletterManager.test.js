const NewsletterManager = require('../newsletterManager.js');

describe('NewsletterManager', () => {
	test('add new user, return true', () => {
		let manager = new NewsletterManager();
		let mockAddUser = jest.fn();
		mockAddUser.mockReturnValue(true);
		manager.db.addUser = mockAddUser;
		let mockDoesUserExist = jest.fn();
		mockDoesUserExist.mockReturnValue(false);
		manager.db.doesUserExist = mockDoesUserExist;
		
		let actual = manager.subscribeUser('Louice', 'louice@mail.com');
		let expected = true;
		expect(actual).toBe(expected);
		expect(mockDoesUserExist.mock.calls.length).toBe(1);
		expect(mockAddUser.mock.calls.length).toBe(1);
	});
	
	test('add existing user, return false', () => {
		let manager = new NewsletterManager();
		let mockAddUser = jest.fn();
		mockAddUser.mockReturnValue(false);
		manager.db.addUser = mockAddUser;
		let mockDoesUserExist = jest.fn();
		mockDoesUserExist.mockReturnValue(true);
		manager.db.doesUserExist = mockDoesUserExist;
		
		let actual = manager.subscribeUser('Existing user', 'louice@mail.com');
		expect(actual).toBe(false);
		expect(mockDoesUserExist.mock.calls.length).toBe(1);
		expect(mockAddUser.mock.calls.length).toBe(0);
	});
	
	/*
	- går det att lägga till en användare i databasen? return true
	- return false om användare redan finns i databasen
	- throw Error om ogiltiga parametrar
	*/
	test('invalid parameters, throws error', () => {
		// name, emailAddress
		// namn: bara siffror, objekt, icke-sträng
		// epost: måste vara sträng, innehålla @
		
		let manager = new NewsletterManager();
		let mockAddUser = jest.fn();
		mockAddUser.mockImplementation( (name, emailAddress) => {
			if( typeof name !== 'string' || name - 1 !== NaN )
				throw new Error();
			return true;
		} )
		manager.db.addUser = mockAddUser;
		let mockDoesUserExist = jest.fn();
		mockDoesUserExist.mockImplementation( (email) => {
			if( typeof email !== 'string' || email.indexOf('@') === -1 )
				throw new Error();
			return false;
		} )
		manager.db.doesUserExist = mockDoesUserExist;
		
		let validEmail = 'example@mail.com';
		let invalidEmail1 = 'example at mail.com';
		let invalidEmail2 = 123;
		let validName = 'Example Name';
		let invalidName1 = '12346';
		let invalidName2 = {};
		
		expect( () => {manager.subscribeUser(validName, invalidEmail1);} ).toThrow();
		expect( () => {manager.subscribeUser(validName, invalidEmail2);} ).toThrow();
		expect( () => {manager.subscribeUser(invalidName1, validEmail);} ).toThrow();
		expect( () => {manager.subscribeUser(invalidName2, validEmail);} ).toThrow();
	});
});













