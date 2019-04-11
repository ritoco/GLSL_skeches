
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2  resolution;

void main(void){
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    vec3 destColor = vec3(.1, .1, .1);
    float f = .01;
    for(float i = 0.0; i <2.0; i++){
        float s = sin(time + i * 4.04719);
        float c = sin(time + i * 4.04719);

	 for(float j = 0.0; j <15.0; j++){
        float s = sin(time + j * 4.04719);
        f += 0.006 / abs(length(p*j + vec2(s, p*c)) -.9);
		      }
    	    }
    gl_FragColor = vec4(vec3(0.1,f,0.1), 1.0);
}
