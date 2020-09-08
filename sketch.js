console.log( 'seting up' );
const
	particles    = [],
	canvasWidth  = window.innerWidth,
	canvasHeight = window.innerHeight;

function spawnParticle() {
	const particle = new Particle( Math.random() * 2 - 1, Math.random() * 2 - 1 );
	particle.color = Math.random() * 255;
	particles.push( particle )
}

function setup() {
	createCanvas( canvasWidth, canvasHeight );
	background( 200, 245, 255 );
	colorMode(HSB);
	for ( let i = 0; i < 50; i ++ ) spawnParticle();
}

function draw() {
	translate( canvasWidth / 2, canvasHeight / 2 );
	spawnParticle();

	console.log( particles.length )

	noStroke();

	for ( let i = particles.length - 1; i >= 0; i-- ) {
		const p = particles[i];
		if ( Math.abs( p.x ) >  canvasWidth / 2 || Math.abs( p.y ) >  canvasHeight / 2 ) {
			// Particle is ou of bounds, remove it to free up mem
			particles.splice( i, 1 );
		}
		p.tick();
		fill( p.color, 255, 255 );
		circle( p.x, p.y, 3 );

	}
}