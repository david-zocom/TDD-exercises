/*
Write test cases for the three methods of
StarshipEnterprise and implement them.
*/

class StarshipEnterprise {
	constructor() {
		this.securityClearance = 0;
		this.torpedoes = 3;
		this.warpCore = true;
	}
	
	/* Some operations require higher clearance. Call
	this method to gain higher clearance. Returns true
	if secretCode was accepted, otherwise false. */
	securityOverride(secretCode) {}
	
	/* Attempts to fire a photon torpedoe at a target.
	Location should be space coordinates, which is an
	object with the properties {x, y, z}. All the
	properties must be numbers and cannot all be zero.
	Should throw an Error if location is not a valid
	space coordinate. Returns true if able to fire a
	torpedo and false if we are out of torpedoes. */
	firePhotonTorpedo(location) {}
	
	/* Use this to eject the warp core from the ship,
	should it become unstable. This method requires
	the highest clearance and should throw an error
	if someone tries to call it with a lesser
	clearance. Otherwise this operation should always
	succeed and return true. */
	ejectWarpCore() {}
	
}


// Did you read all the instructions?
// The highest security code is "Janeway-Alpha"
// TODO remove these comments before production
