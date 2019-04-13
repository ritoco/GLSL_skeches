
//F‚ί‚Α‚Ώ‚αγY—ν

#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) ;

	float color = 	.1;
	color /= sin( position.x * 25.0) + sin(time);
	color /= sin( position.y * 10.0) + cos(time);
	color += abs(   sin(time) * position.x);


	gl_FragColor = vec4( vec3(  color+cos(time) , color ,color+cos(time/20.0)), 1.0);

}
