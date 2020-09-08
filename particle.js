class Particle {
	constructor( x, y, vx = 0, vy = 0, ax = 0, ay = 0 ) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.ax = ax;
		this.ay = ay;
	}

	force( fx, fy ) {
		this.ax += fx;
		this.ay += fy;
	}

	tick() {
		this.vx += this.ax;
		this.vy += this.ay;

		this.x += vx;
		this.y += vy;
	}
}