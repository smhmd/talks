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
    h1 Responsive

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    codemirror.shadow-2xl(:options="htmlOptions" v-model="responsiveSVG" style="font-size: 1.7rem")

  slide(:keyboardNavigation="false" :mouseNavigation="false")
    .grid.grid-cols-3.justify-center.items-center
      codemirror.shadow-2xl(:options="htmlOptions" v-model="responsiveSVGInImg" style="grid-area: 1 / 1 / 2 / 3;")
      div.flex.justify-center.items-center(v-html="responsiveSVGInImg")

  slide
    h1 Interactive
  
  slide.w-full.h-full.flex.justify-center.items-center
    img(src="./assets/interactive-svg.gif")
  slide
    h1 Programmable
  slide(:mouseNavigation="false")
    .flex.flex-col.justify-center.items-center
      svg(height='500' width='500' viewBox='0 0 20 20')
        circle(r='10' cx='10' cy='10' fill='#EBF8FF')
        circle(r='5' cx='10' cy='10' fill='transparent' stroke='#276749' stroke-width='10' :stroke-dasharray='`calc(${chartPrecentage} * 31.4 / 100) 31.4`' transform='rotate(-90) translate(-20)')
      input.mt-10.w-16.text-white.bg-gray-700.rounded-md.p-1(type="number" v-model="chartPrecentage")
  slide
    h1 Accessible
  
  slide

  //- slide
  //-   h1 How to use SVG in your markup
  
  //- slide(:keyboardNavigation="false" :mouseNavigation="false")
  //-   codemirror.shadow-2xl(:value="imgsrcsvg" :options="htmlOptions")
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
  components: {
    codemirror,
    sli,
    SvgPanZoom,
  },
  data() {
    return {
      svgcode: `<svg width="500" xmlns="http://www.w3.org/2000/svg" fill="#0f6d5a" fill-rule="evenodd" viewBox="0 0 847 847">\n\t<path d="M210 341c81-75 225-161 263 1 41-143 204-177 329-132-4 121-68 198-173 252 42 9 103-20 126-56 124 240-392 449-426 11-4-41-79-55-119-76zm-12 61c-11-12 8-29 19-16 0 0 77 85 8 176-11 13-31-2-21-16 57-74-6-143-6-144zM70 442c5-45 52-75 100-85 4-1 7 1 6 4-1 45-49 82-100 86-4 0-6-2-6-5zM48 270c42-15 90 14 119 54 2 3 2 6-1 7-41 18-96-10-120-54-2-3-1-6 2-7zm125-95c36 27 38 83 22 130-2 3-5 4-7 3-38-25-45-85-21-131 1-2 4-3 6-2zm204 125c20 0 20 31 0 31-21 0-21-31 0-31z"/>\n</svg>`,
      responsiveSVG: `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">\n\t<style>\n\t\tcircle { fill: seagreen; }\n\t\t@media (min-width: 150px) { circle { fill: slateblue; } }\n\t</style>\n\t<circle cx="50" cy="50" r="50"/>\n</svg>`,
      responsiveSVGInImg: `\n\n<!--Change the width to 150-->\n<img src="circle.svg" width="50" height="50">`,
      imgsrcsvg: `<img src="image.svg" />\n\n<object data="image.svg" type="image/svg+xml"></object>\n\n<embed src="image.svg" type="image/svg+xml" />\n\n<iframe src="image.svg"></iframe>`,
      htmlOptions: {
        tabSize: 2,
        lineWrapping: true,
        mode: 'text/html',
        theme: 'base16-dark',
        // lineNumbers: true,
        // line: true,
      },
      chartPrecentage: 50,
    };
  },
  mixins: [Slideshow],
  name: 'App',
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
  font-size: 2em !important;
}

h3 {
  font-size: 1.2em !important;
}

li {
  font-size: 1em;
  @apply pb-6;
}

b {
  @apply text-green-700;
}
</style>
