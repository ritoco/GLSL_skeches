// - glslfan.com --------------------------------------------------------------
// Ctrl + s or Command + s: compile shader
// Ctrl + m or Command + m: toggle visibility for codepane
// ----------------------------------------------------------------------------
precision mediump float;
uniform vec2  resolution;     // resolution (width, height)
uniform vec2  mouse;          // mouse      (0.0 ~ 1.0)
uniform float time;           // time       (1second == 1.0)
uniform sampler2D backbuffer; // previous scene

const float PI = 3.1415926;

vec3 hsv(float h, float s, float v){
    vec4 t = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(vec3(h) + t.xyz) * 6.0 - vec3(t.w));
    return v * mix(vec3(t.x), clamp(p - vec3(t.x), 0.0, 1.0), s );
}

void main(){
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / resolution;
    vec3 line = vec3(0.0);
    for(float fi = 0.0; fi < 25.0; ++fi){
        float offset = fi * PI / 100.0;
        float value = 1.0 + sin(time * fi ) * 120.0;
        float timer = time * fi ;
        vec3  color = hsv((fi + time) * 0.1, 1.0, value);
        line += 2.0 / abs(p.y + cos(p.x * line + abs(timer) + offset) / 15.0) * color;
        line += 2.0 / abs(p.x + sin( line + abs(timer) + offset) / 15.0) * color;
    }
    gl_FragColor = vec4(line, 1.0);
}
