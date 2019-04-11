// White_backGround

#ifdef GL_ES
 precision mediump float;
 #endif


 #extension GL_OES_standard_derivatives : enable


 uniform float time;
 uniform vec2  resolution;


 void main(void){
     vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

     float f = 0.001;
     for(float ellipse = 0.0; ellipse < 30.0; ellipse++){ 	// Number_of_eiipse
         float s = sin(time + ellipse * 9.0);
         float c = cos(time + ellipse * 12.0);
         f += 0.025 / abs(length(p + vec2(c+c, s)) -0.25 * abs(sin (time) ));
 	       f += 0.05 / abs(length(p + vec2(c, s+s)) -0.25 * abs(sin (time) ));
     	    }
	         vec3 bgColor = vec3(1.0, 1.0, 1.0);			// background_Color_White
     gl_FragColor = vec4(vec3(bgColor - f *0.08), 1.0);	// vec3（color,strokeWeight）


 }
