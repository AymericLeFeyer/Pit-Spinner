<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps({
  color: { type: String },
  size: { type: Number },
  duration: { type: String },
});

const style = computed(() => {
  const square = props.size || 100;
  const gap = square / 4;
  const canvas = square * 2 + gap;
  const color = props.color || "#E9AE24";
  const duration = props.duration || "3s";

  return {
    "--primary": color,
    "--square": square,
    "--gap": gap,
    "--canvas": canvas,
    "--animation-duration": duration,
  };
});
</script>

<template>
  <div class="pit-loader">
    <div class="pit-square"></div>
    <div class="pit-square"></div>
    <div class="pit-square"></div>
    <div class="pit-square"></div>
  </div>
</template>

<style scoped src="./style.css"></style>
