<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon'
    },
    svgClass: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'red'
    }
  });

  const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style scoped>
  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
