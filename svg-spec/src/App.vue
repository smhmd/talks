<template lang="pug">
.eg-slideshow.h-screen.bg-gray-900.text-gray-400.flex.flex-col.justify-center.items-center.px-10.pt-64
  slide
    h1 Introduction to SVG
    h3 Mohamed Maghraoui (#[a.text-green-700(href="https://www.github.com/aliveupstairs") @aliveupstairs])
  slide
    h1 What is SVG?
  slide.px-5(:steps='4')
    ul.max-w-4xl.m-auto
      li(v-if='step >= 1') #[b XML-based] format for graphics. (SVG is #[span.text-red-700 not] HTML.)
      li(v-if='step >= 2') #[b SVG] dates back to the 90's with its submission to W3C being in 1999.
      li(v-if='step >= 3') #[b SVG] is a #[b vector] graphics format as opposed to a #[b raster] (Bitmap) format.
      li(v-if='step >= 4') Currently, SVG #[b 1.1] #[i 2nd edition] is in use.
        //- li 
  slide
    h1 Why SVG?
  slide(:steps="7")
    ul.max-w-4xl.m-auto
      li(v-if='step >= 1') Searchable/indexable.
      li(v-if='step >= 2') Scalable.
      li(v-if='step >= 3') Responsive.
      li(v-if='step >= 4') Interactive.
      li(v-if='step >= 5') Programmable.
      li(v-if='step >= 6') Performant.
      li(v-if='step >= 7') Accessible.
</template>

<script>
import { Slideshow } from 'eagle.js';

export default {
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
  font-size: 4em !important;
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
