<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="box">{{ count }}</div>
</template>

<style scoped lang="scss">
.box {
  color: $primary-color;
  padding: $padding;
}
</style>
