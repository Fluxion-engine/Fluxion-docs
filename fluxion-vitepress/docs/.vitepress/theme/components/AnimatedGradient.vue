<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
    config: {
        type: Object,
        default: () => ({ preset: 'Fluxion' })
    },
    noise: {
        type: Object,
        default: () => ({ opacity: 0.15, scale: 1 })
    },
    radius: {
        type: String,
        default: '0px'
    }
})

const { isDark } = useData()

const canvasRef = ref(null)
const containerRef = ref(null)
let frameId = null
let startTime = 0
const hasWebGLError = ref(false)

const PatternShapes = {
    Checks: 0,
    Stripes: 1,
    Edge: 2,
}

const presets = {
    Fluxion: {
        color1: "#000000",
        color2: "#051505",
        color3: "#99d19c", // Brand green
        rotation: -45,
        proportion: 60,
        scale: 0.6,
        speed: 12,
        distortion: 35,
        swirl: 70,
        swirlIterations: 8,
        softness: 90,
        offset: 200,
        shape: "Edge",
        shapeSize: 50,
    },
    Aurora: {
        color1: "#0a001a",
        color2: "#1a0b2e",
        color3: "#f20089",
        rotation: -45,
        proportion: 60,
        scale: 0.6,
        speed: 15,
        distortion: 40,
        swirl: 80,
        swirlIterations: 10,
        softness: 100,
        offset: 200,
        shape: "Edge",
        shapeSize: 50,
    }
}

const params = computed(() => {
    // In dark mode, we use the original Fluxion green. 
    // In light mode, maybe a lighter variant? 
    // But the user's theme is "Black & Green" professional theme.
    const preset = presets.Fluxion
    return {
        ...preset,
        // Adapt colors based on theme if needed, but Fluxion is Green on Black usually.
        color1: isDark.value ? "#000000" : "#ffffff",
        color2: isDark.value ? "#051505" : "#e0f2e1",
        color3: isDark.value ? "#99d19c" : "#5db762",
    }
})

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;

uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1;
uniform vec4 u_color2;
uniform vec4 u_color3;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;

out vec4 fragColor;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
    vec3 color1 = c1.rgb * c1.a;
    vec3 color2 = c2.rgb * c2.a;
    vec3 color3 = c3.rgb * c3.a;

    float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);
    float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);

    vec3 blended_color_2 = mix(color1, color2, r1);
    float blended_opacity_2 = mix(c1.a, c2.a, r1);

    vec3 c = mix(blended_color_2, color3, r2);
    float o = mix(blended_opacity_2, c3.a, r2);
    return vec4(c, o);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    float t = .5 * u_time;

    float noise_scale = .0005 + .006 * u_scale;

    uv -= .5;
    uv *= (noise_scale * u_resolution);
    uv = rotate(uv, u_rotation * .5 * PI);
    uv /= u_pixelRatio;
    uv += .5;

    float n1 = noise(uv * 1. + t);
    float n2 = noise(uv * 2. - t);
    float angle = n1 * TWO_PI;
    uv.x += 4. * u_distortion * n2 * cos(angle);
    uv.y += 4. * u_distortion * n2 * sin(angle);

    float iterations_number = ceil(clamp(u_swirlIterations, 1., 30.));
    for (float i = 1.; i <= iterations_number; i++) {
        uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);
        uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);
    }

    float proportion = clamp(u_proportion, 0., 1.);

    float shape = 0.;
    float mixer = 0.;
    if (u_shape < .5) {
      vec2 checks_shape_uv = uv * (.5 + 3.5 * u_shapeScale);
      shape = .5 + .5 * sin(checks_shape_uv.x) * cos(checks_shape_uv.y);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else if (u_shape < 1.5) {
      vec2 stripes_shape_uv = uv * (.25 + 3. * u_shapeScale);
      float f = fract(stripes_shape_uv.y);
      shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else {
      float sh = 1. - uv.y;
      sh -= .5;
      sh /= (noise_scale * u_resolution.y);
      sh += .5;
      float shape_scaling = .2 * (1. - u_shapeScale);
      shape = smoothstep(.45 - shape_scaling, .55 + shape_scaling, sh + .3 * (proportion - .5));
      mixer = shape;
    }

    vec4 color_mix = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);

    fragColor = vec4(color_mix.rgb, color_mix.a);
}
`;

function hexToRgba(hex) {
    let r = 0, g = 0, b = 0, a = 1;

    if (hex.startsWith("#")) {
        const c = hex.slice(1);
        if (c.length === 3) {
            r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255;
            g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255;
            b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255;
        } else if (c.length >= 6) {
            r = parseInt(c.slice(0, 2), 16) / 255;
            g = parseInt(c.slice(2, 4), 16) / 255;
            b = parseInt(c.slice(4, 6), 16) / 255;
            if (c.length === 8) a = parseInt(c.slice(6, 8), 16) / 255;
        }
    }
    return [r, g, b, a];
}

let gl, program, positionBuffer, resizeObserver;

const initWebGL = () => {
    const canvas = canvasRef.value;
    if (!canvas) return;

    gl = canvas.getContext("webgl2", {
        premultipliedAlpha: true,
        alpha: true,
        antialias: true,
    });
    if (!gl) {
        hasWebGLError.value = true;
        return;
    }

    const vertexShaderSource = `#version 300 es
    in vec4 a_position;
    void main() {
      gl_Position = a_position;
    }`;

    const compileShader = (source, type) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(FRAGMENT_SHADER, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) {
        hasWebGLError.value = true;
        return;
    }

    program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        hasWebGLError.value = true;
        return;
    }
    gl.useProgram(program);

    positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
        u_time: gl.getUniformLocation(program, "u_time"),
        u_resolution: gl.getUniformLocation(program, "u_resolution"),
        u_pixelRatio: gl.getUniformLocation(program, "u_pixelRatio"),
        u_scale: gl.getUniformLocation(program, "u_scale"),
        u_rotation: gl.getUniformLocation(program, "u_rotation"),
        u_color1: gl.getUniformLocation(program, "u_color1"),
        u_color2: gl.getUniformLocation(program, "u_color2"),
        u_color3: gl.getUniformLocation(program, "u_color3"),
        u_proportion: gl.getUniformLocation(program, "u_proportion"),
        u_softness: gl.getUniformLocation(program, "u_softness"),
        u_shape: gl.getUniformLocation(program, "u_shape"),
        u_shapeScale: gl.getUniformLocation(program, "u_shapeScale"),
        u_distortion: gl.getUniformLocation(program, "u_distortion"),
        u_swirl: gl.getUniformLocation(program, "u_swirl"),
        u_swirlIterations: gl.getUniformLocation(program, "u_swirlIterations"),
    };

    const resize = () => {
        const container = containerRef.value;
        if (!container) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(containerRef.value);

    startTime = performance.now();

    const animate = (time) => {
        if (!gl) return;
        const elapsed = (time - startTime) / 1000;
        const p = params.value;
        const speed = (p.speed / 100) * 5;

        gl.uniform1f(uniforms.u_time, elapsed * speed + p.offset * 0.01);
        gl.uniform2f(uniforms.u_resolution, canvas.width, canvas.height);
        gl.uniform1f(uniforms.u_pixelRatio, window.devicePixelRatio || 1);
        gl.uniform1f(uniforms.u_scale, p.scale);
        gl.uniform1f(uniforms.u_rotation, (p.rotation * Math.PI) / 180);

        const c1 = hexToRgba(p.color1);
        const c2 = hexToRgba(p.color2);
        const c3 = hexToRgba(p.color3);
        gl.uniform4f(uniforms.u_color1, c1[0], c1[1], c1[2], c1[3]);
        gl.uniform4f(uniforms.u_color2, c2[0], c2[1], c2[2], c2[3]);
        gl.uniform4f(uniforms.u_color3, c3[0], c3[1], c3[2], c3[3]);

        gl.uniform1f(uniforms.u_proportion, p.proportion / 100);
        gl.uniform1f(uniforms.u_softness, p.softness / 100);
        gl.uniform1f(uniforms.u_shape, PatternShapes[p.shape]);
        gl.uniform1f(uniforms.u_shapeScale, p.shapeSize / 100);
        gl.uniform1f(uniforms.u_distortion, p.distortion / 50);
        gl.uniform1f(uniforms.u_swirl, p.swirl / 100);
        gl.uniform1f(
            uniforms.u_swirlIterations,
            p.swirl === 0 ? 0 : p.swirlIterations
        );

        gl.drawArrays(gl.TRIANGLES, 0, 6);
        frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
}

onMounted(() => {
    initWebGL();
})

onUnmounted(() => {
    if (frameId) cancelAnimationFrame(frameId);
    if (resizeObserver) resizeObserver.disconnect();
    if (gl && program) {
        gl.deleteProgram(program);
        gl.deleteBuffer(positionBuffer);
    }
})

// Update on theme change or params change
watch(params, () => {
    // WebGL will pick up new params in next frame if gl is active
}, { deep: true })
</script>

<template>
    <div ref="containerRef" class="animated-gradient-container" :style="{ borderRadius: radius }">
        <canvas ref="canvasRef" v-show="!hasWebGLError" />
        <div v-if="noise && noise.opacity > 0" class="noise-overlay" :style="{
            backgroundSize: (noise.scale ?? 1) * 200 + 'px',
            opacity: noise.opacity / 2
        }" />
    </div>
</template>

<style scoped>
.animated-gradient-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}

canvas {
    display: block;
    width: 100%;
    height: 100%;
}

.noise-overlay {
    position: absolute;
    inset: 0;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMCCgkGBAVJOAVJAAAASklEQVQ4y2NgGAWjYBSMglEwCgY/YGRgZBQUYmJiZGQEkYwMjIyMgoKCjIyMIJKBgRFIMjIyAklGRkYGRkFBYEcwMDIyMjAOUQAA1I4HwVwZAkYAAAAASUVORK5CYII=");
    background-repeat: repeat;
    pointer-events: none;
}
</style>
