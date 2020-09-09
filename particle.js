class Particle {

	/**
	 *
	 * @param {number} vx Velocity x
	 * @param {number} vy Velocity y
	 * @param {number} x Position x
	 * @param {number} y Position y
	 * @param {number} ax Acceleration x
	 * @param {number} ay Acceleration y
	 */
	constructor( vx = 0, vy = 0, x = 0, y = 0, ax = 0, ay = 0 ) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.ax = ax;
		this.ay = ay;
		this.fx = 0;
		this.fy = 0;
	}

	resetForce() {
		this.ax = 0;
		this.ay = 0;
	}

	addForce( fx, fy ) {
		this.ax += fx;
		this.ay += fy;
	}

	force( fx, fy ) {
		this.ax = fx;
		this.ay = fy;
	}

	tick() {

		this.vx += this.ax;
		this.vy += this.ay;

		this.x += this.vx;
		this.y += this.vy;
	}
}