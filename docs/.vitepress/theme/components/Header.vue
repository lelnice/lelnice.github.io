<template>
  <MultiColor class="header">
    <div class="header-content">
      <label @click="router.go('/')" class="logo">lelnice</label>
    </div>
  </MultiColor>
</template>
<script lang="ts" setup>
import MultiColor from './MultiColor.vue'
import { useRouter } from 'vitepress'
const router = useRouter()
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 2000;
  height: 3.75rem;

  .header-content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    .logo {
      margin-left: 1.25rem;
      font-size: 1.75rem;
      color: var(--vp-c-white);
      cursor: pointer;
    }
  }
}
</style>
