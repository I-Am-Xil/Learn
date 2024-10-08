#version 460
#ifdef GL
precision mediump float;
#endif

out vec4 fragColor;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    vec2 coord = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(0.5)-coord;

    float r = length(pos)*2.;
    float a = atan(pos.y, pos.x);

    float f = cos(a*3.);
    f = abs(cos(a*3.));
    f = abs(cos(a*2.5))*.5+.3;
    f = abs(cos(a*12.)*sin(a*3.))*.8+.1;
    f = smoothstep(-.5, 1., cos(a*10.*sin(u_time/2)))*.2+.5;


    color = vec3(1.-smoothstep(f, f+0.02, r));

    fragColor = vec4(color, 1.0);
}
