<template>
  <main class="container">
    <slot></slot>
  </main>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
main {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: $header-height;
}
</style>
