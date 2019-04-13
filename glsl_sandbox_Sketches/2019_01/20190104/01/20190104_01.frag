//かわいい角丸チェック
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) ;

	float color = 20.0;
	color *= sin( position.x  * -50.0 ) * sin(time);
	color *= sin( position.y  * -25.0 ) * sin(time);
	color *= abs( time / 50.0 ) * position.y;

	gl_FragColor = vec4( vec3(  color * cos(time/1.5)  , color * cos(time/10.0) , color*sin(time) ), 1.0 );

}

