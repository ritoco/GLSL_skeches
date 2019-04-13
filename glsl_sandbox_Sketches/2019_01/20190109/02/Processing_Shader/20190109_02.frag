#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) ;

	float color = 0.0;
	color += sin( position.x * 70.0 ) * sin(time);
	color += sin( position.y * 120.0 ) * cos(time);
	
	
	gl_FragColor = vec4( vec3( color, sin( color + time / 20.0 ), sin( color + time / 20.0 ) * 2.0 ), 21.0 );

}