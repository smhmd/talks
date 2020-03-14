<template lang="pug">
.h-screen.bg-gray-900.text-gray-400.flex.justify-center.items-center

  slide
    h1(style="font-size: 4em !important") Introduction to SVG
    h3 Simohamed (#[a.text-green-700(href="https://www.github.com/aliveupstairs") @aliveupstairs])

  slide
    h1 What is SVG?

  slide.px-5(:steps='4')
    ul.max-w-4xl
      sli(:step="step" :stepNum="1") #[b XML-based] format for graphics. (SVG is #[b.text-red-700 not] HTML.)
      sli(:step="step" :stepNum="2") #[b SVG] dates back to the 90's with its submission to W3C being in 1999.
      sli(:step="step" :stepNum="3") #[b SVG] is a #[b vector] graphics format as opposed to a #[b raster] (Bitmap) format.
      sli(:step="step" :stepNum="4") Currently, SVG #[b 1.1] #[i 2nd edition] is in use.


  slide
    h1 Why use SVG?

  slide
    h2 Scalable

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    SvgPanZoom.border.border-solid.border-white(
          style="width: 500px; height: 500px;"
          :zoomEnabled="true"
          :fit="false"
          :center="true"
      )
      svg( width="100%" height="100%" xmlns='http://www.w3.org/2000/svg' fill='#0f6d5a' fill-rule='evenodd' viewBox='0 0 847 847')
        path(d='M210 341c81-75 225-161 263 1 41-143 204-177 329-132-4 121-68 198-173 252 42 9 103-20 126-56 124 240-392 449-426 11-4-41-79-55-119-76zm-12 61c-11-12 8-29 19-16 0 0 77 85 8 176-11 13-31-2-21-16 57-74-6-143-6-144zM70 442c5-45 52-75 100-85 4-1 7 1 6 4-1 45-49 82-100 86-4 0-6-2-6-5zM48 270c42-15 90 14 119 54 2 3 2 6-1 7-41 18-96-10-120-54-2-3-1-6 2-7zm125-95c36 27 38 83 22 130-2 3-5 4-7 3-38-25-45-85-21-131 1-2 4-3 6-2zm204 125c20 0 20 31 0 31-21 0-21-31 0-31z')

  slide
    h2 Responsive

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    codemirror.shadow-2xl(:options="htmlOptions" v-model="responsiveSVG" style="font-size: 1.7rem")

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-3.justify-center.items-center
      codemirror.shadow-2xl(:options="htmlOptions" v-model="responsiveSVGInImg" style="grid-area: 1 / 1 / 2 / 3;")
      div.flex.justify-center.items-center(v-html="responsiveSVGInImg")

  slide
    h2 Interactive

  slide.w-full.h-full.flex.justify-center.items-center
    img(src="./assets/interactive-svg.gif")
  slide
    h2 Programmable
  slide(:mouseNavigation="false")
    .flex.flex-col.justify-center.items-center
      svg(height='300' width='300' viewBox='0 0 20 20')
        circle(r='10' cx='10' cy='10' fill='#20504F')
        circle(r='5' cx='10' cy='10' fill='transparent' stroke='#276749' stroke-width='10' :stroke-dasharray='`calc(${chartPrecentage} * 31.4 / 100) 31.4`' transform='rotate(-90, 10, 10)')
      input.mt-10.pl-4.text-white.bg-gray-700.rounded-md.p-1(type="number" v-model="chartPrecentage" min="0" max="100")
  slide
    h2 Accessible

  slide
    h1 How to use SVG

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    codemirror.shadow-2xl(:value="htmlSrcSVG" :options="htmlOptions")

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    codemirror.shadow-2xl(:value="csssrcSVG" :options="htmlOptions")

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    codemirror.shadow-2xl(:value="inlineSVG" :options="htmlOptions")

  slide
    h1 Browser Support

  slide.w-full.h-full.flex.justify-center.items-center
    img(src="./assets/browser-support.png")

  slide
    h1 SVG Syntax

  slide
    h2 Basic Shapes

  slide
    h3 #[code rect]

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center
      codemirror.shadow-2xl(v-model="SVGRect" :options="CodeOptions")
      .self-start(v-html="SVGRect")

  slide
      h3 #[code circle]

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center
      codemirror.shadow-2xl(v-model="SVGCircle" :options="CodeOptions")
      .self-start(v-html="SVGCircle")

  slide
      h3 #[code ellipse]

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center
      codemirror.shadow-2xl(v-model="SVGEllipse" :options="CodeOptions")
      .self-start(v-html="SVGEllipse")

  slide
    h3 #[code rect] Radius

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="SVGRectRadius" :options="CodeOptions")
      .self-start(v-html="SVGRectRadius")

  slide
    h3 #[code line]

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="SVGLine" :options="CodeOptions")
      .self-start(v-html="SVGLine")
  slide
    h3 #[code polyline] and #[code polygon]

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="SVGPoly" :options="CodeOptions")
      .self-start(v-html="SVGPoly")

  slide
    h2 #[code path] Element

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    codemirror.shadow-2xl(value="\n\n\n\n\n\n\n<path d='commandLetter arguments(positive or negative values)' />" :options="htmlOptions")

  slide
    h3 Line Commands

  slide
    h3 Move To #[code (M, m)]
    p Syntax: M x y

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="PathM" :options="CodeOptions")
      .self-start(v-html="PathM")

  slide
    h3 Line To #[code (L, l)] #[code (H, h)] #[code (V, v)]
    p Syntax: L x y; V x; H y

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="PathL" :options="CodeOptions")
      .self-start(v-html="PathL")
  slide
    h3 Close Path #[code (Z, z)]
    p Syntax: Z

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="PathZ" :options="CodeOptions")
      .self-start(v-html="PathZ")

  slide
    h3 Curve Commands

  slide
    h3 Cubic Curve #[code (C, c)]
    p Syntax: C x1 y1, x2 y2, x y

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="PathC" :options="CodeOptions")
      .self-start(v-html="PathC")

  slide
    svg(width='400' height='400' xmlns='http://www.w3.org/2000/svg' viewBox="-10 -20 200 200")
      path(d='M 10 10 C 20 20, 40 20, 50 10' stroke='white' fill='transparent')
      path(d='M 70 10 C 70 20, 120 20, 120 10' stroke='white' fill='transparent')
      path(d='M 130 10 C 120 20, 180 20, 170 10' stroke='white' fill='transparent')
      path(d='M 10 60 C 20 80, 40 80, 50 60' stroke='white' fill='transparent')
      path(d='M 70 60 C 70 80, 110 80, 110 60' stroke='white' fill='transparent')
      path(d='M 130 60 C 120 80, 180 80, 170 60' stroke='white' fill='transparent')
      path(d='M 10 110 C 20 140, 40 140, 50 110' stroke='white' fill='transparent')
      path(d='M 70 110 C 70 140, 110 140, 110 110' stroke='white' fill='transparent')
      path(d='M 130 110 C 120 140, 180 140, 170 110' stroke='white' fill='transparent')
      g(fill='red')
        circle(cx='20' cy='20' r="1.5")
        circle(cx='40' cy='20' r="1.5")

        circle(cx='70' cy='20' r="1.5")
        circle(cx='120' cy='20' r="1.5")

        circle(cx='120' cy='20' r="1.5")
        circle(cx='180' cy='20' r="1.5")
        circle(cx='20' cy='80' r="1.5")

        circle(cx='40' cy='80' r="1.5")
        circle(cx='70' cy='80' r="1.5")

        circle(cx='110' cy='80' r="1.5")
        circle(cx='120' cy='80' r="1.5")

        circle(cx='180' cy='80' r="1.5")
        circle(cx='20' cy='140' r="1.5")

        circle(cx='40' cy='140' r="1.5")
        circle(cx='70' cy='140' r="1.5")

        circle(cx='110' cy='140' r="1.5")
        circle(cx='120' cy='140' r="1.5")

        circle(cx='180' cy='140' r="1.5")

  slide
    h3 Smooth Cubic Curve #[code (S, s)]
    p Syntax: S xp yp, x y

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="PathS" :options="CodeOptions")
      .self-start(v-html="PathS")

  slide
    h3 Quadratic Curve #[code (Q, q)]
    p Syntax: Q xp yp, x y

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="PathQ" :options="CodeOptions")
      .self-start(v-html="PathQ")

  slide
    h3 Quadratic Curve #[code (T, t)]
    p Syntax: T x y

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="PathT" :options="CodeOptions")
      .self-start(v-html="PathT")

  slide
    h3 Arcs
    p A rx ry x-axis-rotation large-arc-flag sweep-flag x y

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="PathA" :options="CodeOptions")
      .self-start(v-html="PathA")

  slide
    h2 ViewBox


  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="viewBox" :options="CodeOptions")
      .self-start(v-html="viewBox")

  slide
    h2 Structural elements

  slide
    h3 #[code g]

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="StructureG" :options="CodeOptions")
      .self-start(v-html="StructureG")

  slide
    h3 #[code defs] and #[code use]

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="StructureDefsUse" :options="CodeOptions")
      .self-start(v-html="StructureDefsUse")
  slide
    h2 Namesapces

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    codemirror.shadow-2xl(:value="namespaces" :options="htmlOptions")

  slide.px-5(:steps='4')
    ul.max-w-4xl
      sli(:step="step" :stepNum="1") less of a URL, more of unique string.
      sli(:step="step" :stepNum="2") XML thrives to be mixed (XHTML, HTML, SVG, MathML, etc.)
      sli(:step="step" :stepNum="3") User agent uses namespaces to to distinguish between XML dialects.
      sli(:step="step" :stepNum="4") version is ignored by all user agents.

  slide
    h2 Animation

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-2.gap-2.lg_gap-6.justify-center.items-center.max-w-6xl
      codemirror.shadow-2xl(v-model="animateSVG" :options="CodeOptions")
      .self-start(v-html="animateSVG")

  slide.w-full.h-full.flex.justify-center.items-center
    img(style="height: 40rem" src="./assets/path-stroke-animation.gif")

  slide
    h1 Thank you
</template>

<script>
import { Slideshow } from 'eagle.js';

import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/mode/htmlembedded/htmlembedded.js';

import sli from './components/steppedlistitem';

import SvgPanZoom from 'vue-svg-pan-zoom';

export default {
  name: 'App',
  components: {
    codemirror,
    sli,
    SvgPanZoom,
  },
  data() {
    return {
      responsiveSVG: `\n\n\n\n\n\n<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">\n\t<style>\n\t\tcircle { fill: seagreen; }\n\t\t@media (min-width: 150px) { circle { fill: slateblue; } }\n\t</style>\n\t<circle cx="50" cy="50" r="50"/>\n</svg>`,
      responsiveSVGInImg: `\n\n\n\n\n\n<!--Change the width to 150-->\n<img src="circle.svg" width="50" height="50">`,
      htmlSrcSVG: `\n\n\n\n<img src="image.svg" />\n\n<object data="image.svg" type="image/svg+xml"></object>\n\n<embed src="image.svg" type="image/svg+xml" />\n\n<iframe src="image.svg"></iframe>`,
      csssrcSVG: `<style>\n\n\tdiv {\n\tbackground: url('data:image/svg+xml;base64,...');\n\t}\n\n\ta[href^="https://twitter.com"]::before {\n\t\tcontent: url('twitter_logo.svg');\n\t\tdisplay: inline-block;\n\t\twidth: 24px;\n\t\theight: 24px;\n\t}\n\n</style>`,
      inlineSVG: `\n\n\n\n<body>\n\t...\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">\n\t\t<!-- svg code -->\n\t</svg>\n\t...\n</body>`,
      SVGRect: `<svg style="border: 1px dashed white">\n</svg>`,
      SVGCircle: `<svg width="100%" height="300" style="border: 1px dashed white">\n\t<circle />\n</svg>`,
      SVGEllipse: `<svg width="100%" height="300" style="border: 1px dashed white">\n\t<ellipse />\n</svg>`,
      SVGRectRadius: `<svg width="100%" height="300">\n\t<!-- <circle r="100" stroke="white" fill="none" transform="translate(100, 100)" /> -->\n\t<rect\n\t\tx="0"\n\t\ty="0"\n\t\twidth="100%"\n\t\theight="300"\n\t\tfill="none"\n\t\tstroke="white"\n\t/>\n</svg>`,
      SVGLine: `<svg style="border: 1px dashed">\n\t<line x1="10"\n\t\t\t\ty1="20"\n\t\t\t\tx2="250"\n\t\t\t\ty2="50"\n\t\t\t\tstroke="white"\n\t\t\t\tstroke-width="4"/>\n</svg>`,
      SVGPoly: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<polyline\n\tpoints="20 20,\n\t\t\t\t\t40 25,\n\t\t\t\t\t60 40,\n\t\t\t\t\t80 120,\n\t\t\t\t\t120 140,\n\t\t\t\t\t200 180"\n\tfill="none"\n\tstroke="white"\n\tstroke-width="10"\n/>\n</svg>`,
      PathM: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<path d="M10 10"\n\t\t\t\tstroke="white"/>\n\n\t<circle cx="10"\n\t\t\t\t\tcy="10"\n\t\t\t\t\tr="2"\n\t\t\t\t\tfill="red"/>\n</svg>`,
      PathL: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<path d="M100 100\n\t\t\t\t\t L 200 200"\n\t\t\t\tstroke="white"/>\n</svg>`,
      PathZ: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<path d="M100 100\n\t\t\t\t\t L 200 200\n\t\t\t\t\t 200 20"\n\t\t\t\tstroke="white"/>\n</svg>`,
      PathC: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<path d="M 100 100\n\t\t\t\t\t C 50 30\n\t\t\t\t\t 200 30\n\t\t\t\t\t 250 100"\n\t\t\t\tstroke="white"\n\t\t\t\tstroke-width="5"\n\t\t\t\tfill="transparent"/>\n\n\t<!--<circle cx="50" cy="30" fill="red" r="2" />\n\t\t<circle cx="200" cy="30" fill="red" r="2" />-->\n</svg>`,
      PathS: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<path d="M 10 80\n\t\t\t\t\t C 40 10\n\t\t\t\t\t 65 10\n\t\t\t\t\t 95 80\n\t\t\t\t\t S 150 150\n\t\t\t\t\t 180 80"\n\t\t\t\tstroke="white"\n\t\t\t\tstroke-width="5"\n\t\t\t\tfill="transparent"/>\n</svg>`,
      PathQ: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<path d="M 50 50\n\t\t\t\t\t Q 50 200\n\t\t\t\t\t 200 200"\n\t\t\t\tstroke="white"\n\t\t\t\tstroke-width="5" \n\t\t\t\tfill="transparent"/>\n\n\t<!--<polyline points="50 50\n\t\t\t\t\t\t\t\t\t\t50 200\n\t\t\t\t\t\t\t\t\t\t200 200"\n\t\t\t\t\t\tstroke="white"\n\t\t\t\t\t\tstroke-dasharray="5"\n\t\t\t\t\t\tfill="none"/>\t\n\t<circle cx="50" cy="200" r="2" fill="red"/>-->\n</svg>`,
      PathT: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<path d="M 10 150\n\t\t\t\t\t q 50 50\n\t\t\t\t\t 100 0\n\t\t\t\t\t t 100 0"\n\t\t\t\tstroke="white"\n\t\t\t\tstroke-width="5" \n\t\t\t\tfill="transparent"/>\n\n\t<polyline points="10 150\n\t\t\t\t\t\t\t\t\t\t60 200\n\t\t\t\t\t\t\t\t\t\t110 150"\n\t\t\t\t\t\tstroke="white"\n\t\t\t\t\t\tstroke-dasharray="5"\n\t\t\t\t\t\tfill="none"/>\t\n\t<circle cx="60" cy="200" r="2" fill="red"/>\n</svg>`,
      PathA: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<path d="M 200 80\n\t\t\t\t\t a 50 50, 0, 1, 0, 50 50\n\t\t\t\t\t v -50\n\t\t\t\t\t z"\n\t\t\t\tfill="none"\n\t\t\t\tstroke="white"\n\t\t\t\tstroke-width="2"\n\t/>\n</svg>\n\n<!-- A rx ry x-axis-rotation large-arc-flag sweep-flag x y -->`,
      viewBox: `<svg width="500"\n\t\t height="400"\n\t\t style="border: 1px dashed"\n\t\t viewBox="0 0 500 400">\n\t<rect x="0"\n\t\t\t\ty="0"\n\t\t\t\twidth="100"\n\t\t\t\theight="150"\n\t\t\t\tfill="white"/>\n</svg>`,
      StructureG: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<g fill="none"\n\t\t stroke="seagreen"\n\t\t stroke-width="5">\n\t\t<circle cx="40" cy="40" r="25" />\n\t\t<circle cx="60" cy="60" r="25" />\n\t\t<circle cx="80" cy="150"r="25" />\n\t</g>\n</svg>`,
      StructureDefsUse: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<polygon points="100,10 40,198 190,78 10,78 160,198"/>\n</svg>`,
      namespaces: `<svg viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg"\n\t\t xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\n\t<defs>\n\t\t<circle id="myCircle" cx="0" cy="0" r="5" />\n\n\t\t<linearGradient id="myGradient" gradientTransform="rotate(90)">\n\t\t\t<stop offset="20%" stop-color="gold" />\n\t\t\t<stop offset="90%" stop-color="red" />\n\t\t</linearGradient>\n\t</defs>\n \n\t<use x="5" y="5" xlink:href="#myCircle" fill="url('#myGradient')" />\n</svg>`,
      animateSVG: `<svg width="100%" height="300" style="border: 1px dashed">\n\t<polygon points="100,10 40,198 190,78 10,78 160,198"\n\t\t\t\t\t stroke="white"\n\t\t\t\t\t fill="none"\n\t\t\t\t\t pathLength="1" \n\t\t\t\t\t stroke-dasharray="1"\n\t\t\t\t\t stroke-dashoffset="1" \n\t\t\t\t\t style="animation: dash 5s linear alternate infinite;"/>\n</svg>\n\n<style>\n @keyframes dash {\n\tfrom {\n\t\tstroke-dashoffset: 1;\n\t}\n\tto {\n\t\tstroke-dashoffset: 0;\n\t}\n}\n</style>`,
      htmlOptions: {
        tabSize: 2,
        lineWrapping: true,
        mode: 'text/html',
        theme: 'base16-dark',
      },
      CodeOptions: {
        tabSize: 2,
        lineWrapping: true,
        mode: 'text/html',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
      },
      chartPrecentage: 33,
    };
  },
  mixins: [Slideshow],
};
</script>

<style lang="postcss">
.eg-slide {
  padding: 10px;
  position: absolute;
}

h1 {
  font-size: 3.2em !important;
}

h2 {
  @apply text-blue-500;
  font-size: 2em !important;
}

h3 {
  font-size: 1.5em !important;
}

li {
  font-size: 1em;
  @apply pb-6;
}

b {
  @apply text-green-700;
}

code {
  @apply bg-gray-700 text-gray-900 rounded-lg px-3;
  font-family: 'Iosevka SS03', 'Courier New', Courier, monospace !important;
}

.CodeMirror {
  height: 90vh !important;
}

::-webkit-scrollbar {
  width: 12px; /* for vertical scrollbars */
  height: 12px; /* for horizontal scrollbars */
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.432);
}

@keyframes dash {
  from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
