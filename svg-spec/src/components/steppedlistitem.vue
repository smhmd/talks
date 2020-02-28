//- this item takes a step nubmer and hides a list element using 0 opacity
<template lang="pug">
li(:class="step >= stepNum ? 'opacity-100' : 'opacity-0'")
  slot
</template>

<script>
export default {
  props: {
    step: Number,
    stepNum: Number,
  },
};
</script>
