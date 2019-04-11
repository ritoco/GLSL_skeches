#ifdef GL_ES
precision mediump float;
#endif


#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy * resolution.xy ) /	2000.0;

	float color = 0.2;
	color *= sin( position.y * cos( time + 75.0 ));
	color *= tan( position.x * cos( time + 7.0 ) );

	gl_FragColor = vec4( vec3( color*time,   0.5, sin( color + time ) * 0.5 ), 1.0 );

}
