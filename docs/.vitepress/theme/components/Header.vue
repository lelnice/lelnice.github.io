<template>
  <header>
    <div class="header-content">
      <Button class="logo" @click="goto('/')">LELNICE</Button>
      <nav class="gt-sm">
        <Button
          v-for="item in navItems"
          :key="item.label"
          @click="goto(item.link)"
        >
          {{ item.label }}
        </Button>
      </nav>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { useRouter } from 'vitepress'
import Button from './Button.vue'
const navItems = [
  { label: '文章', link: '/posts' },
  { label: '关于', link: '/about' },
  { label: '朋友们', link: '/friends' },
]
const router = useRouter()
function goto(link: string) {
  router.go(link)
}
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 2000;
  width: 100%;
  height: $header-height;
  padding: 0 2.5rem;
  background-color: var(--ln-white);
  border-radius: 0 0 1.25rem 1.25rem;
  box-shadow: $shadow;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    nav {
      display: flex;

      & > .button:not(:last-child) {
        margin-right: 0.625rem;
      }
    }
  }
}
</style>
