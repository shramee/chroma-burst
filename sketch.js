const
	particles    = [],
	canvasWidth  = window.innerWidth,
	canvasHeight = window.innerHeight;

function spawnParticle( size = 5 ) {
	const particle = new Particle( Math.random() * 2 - 1, Math.random() * 2 - 1 );
	particle.x = particle.vx * canvasWidth / 8;
	particle.hue = Math.random() * 255;
	particle.brit = Math.random() * 25 + 230;
	particle.size = Math.random() * .5 * size + .5 * size;
	particles.push( particle )
}

function calcForceY( p ) {
	Math.abs( p.x );
	return p.y && p.y / 60000;
}

function setup() {
	createCanvas( canvasWidth, canvasHeight );
	background( 0 );
	colorMode(HSB, 255);

	/* Spawn large particles */
	for ( let i = 0; i < 100; i ++ ) spawnParticle();
}

function draw() {
	translate( canvasWidth / 2, canvasHeight / 2 );
	spawnParticle();

	noStroke();

	for ( let i = particles.length - 1; i >= 0; i-- ) {
		const p = particles[i];
		if ( Math.abs( p.x ) >  canvasWidth / 2 || Math.abs( p.y ) >  canvasHeight / 2 ) {
			// Particle is out of bounds, free up mem
			particles.splice( i, 1 );
		}
	}

	for ( let i = 0; i < particles.length; i++ ) {
		const p = particles[i];
		p.force( 0, calcForceY( p ) );
		p.tick();
		fill( p.hue, 255, p.brit );
		circle( p.x, p.y, p.size );
	}
}