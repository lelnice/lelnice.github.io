<template>
  <div class="header">
    <div class="header-content">
      <label @click="router.go('/')" class="logo">lelnice</label>
    </div>
  </div>
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
  width: 100%;
  height: 4.375rem;

  .header-content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 3.125rem;
    box-shadow: 0 10px 10px 10px #999;

    .logo {
      margin-left: 1.25rem;
      font-size: 1.75rem;
      color: var(--vp-c-white);
      cursor: pointer;
    }
  }
}
</style>
