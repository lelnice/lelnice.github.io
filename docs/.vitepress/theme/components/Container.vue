<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: calc(100vh - 3.75rem);
}
</style>
