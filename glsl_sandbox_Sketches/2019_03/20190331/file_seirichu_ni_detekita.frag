
#ifdef GL_ES
precision mediump float;
#endif
uniform float time;
uniform vec2  resolution;

void main(void){
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    float line = 0.1;       //線の色を決める値
    for(float i = 0.0; i <4.0; i++){
        float s = sin(time + i * 4.04719);
        float c = sin(time + i * 4.04719);

	 for(float j = 0.0; j <8.0; j++)
   {
        float s = sin(time + j * 4.04719);
        line += 0.0002 / abs(length(j + vec2(s*s, c*j))+ 1.4);
        line /= 0.002 - sin(length(p*s + vec2(s*s, p*c))-0.4);
        //
		      }
    	    }
    gl_FragColor = vec4(vec3(line*line,line,0.4), 1.0);
}
