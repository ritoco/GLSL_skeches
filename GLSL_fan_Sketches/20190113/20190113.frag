// - glslfan.com --------------------------------------------------------------
// Ctrl + s or Command + s: compile shader
// Ctrl + m or Command + m: toggle visibility for codepane
// ----------------------------------------------------------------------------
precision mediump float;
vec3 hsv(float h, float s, float v){
    vec4 t = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(vec3(h) + t.xyz) * 6.0 - vec3(t.w));
    return v * mix(vec3(t.x), clamp(p - vec3(t.x), 0.0, 1.0), s);
}

void main(){
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / resolution;
    vec3 line = vec3(0.0);
    for(float fi = 0.0; fi < 3.0; ++fi){
        float offset = fi * PI / 2.0;
        float value = 1.0 + sin(time * fi * 2.5) * 3.0;
        float timer = time * fi * 0.02;
        vec3  color = hsv((fi + time) * 0.1, 1.0, value);
        line -= 10. / abs(p.y + cos(p.x * line + abs(timer) + offset) ) * color;
    }
    gl_FragColor = vec4(line, 1.0);
}
