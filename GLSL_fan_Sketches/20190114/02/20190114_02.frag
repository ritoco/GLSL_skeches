#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) ;

	float color = 1.0;

	color += sin( position.x * 10.0)*sin( position.y * 100.0+time);
	color -= sin( position.y * 100.0)+sin( position.y * 1.0*time);
	color /= sin( position.y * 10.0)/sin( position.y * 20.0);

    
    
	gl_FragColor = vec4( vec3(  color-cos(time) , color-cos(time) ,color-cos(time)), 1.0);

}