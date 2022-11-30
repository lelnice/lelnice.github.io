<template>
  <div class="docspage">
    <Content class="vp-doc" :onContentUpdated="onContentUpdated" />
    <div class="outline-wrapper">
      <MultiColor direction="left">
        <DocsOutline class="outline"></DocsOutline>
      </MultiColor>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { provide, ref } from 'vue'
import DocsOutline from '../components/DocsOutline.vue'
import MultiColor from '../components/MultiColor.vue'
const onContentUpdated = ref()
provide('onContentUpdated', onContentUpdated)
</script>
<style lang="scss" scoped>
.docspage {
  width: 100%;
  height: 100%;
  padding: 1.25rem;

  .vp-doc {
    max-width: 70%;
  }

  .outline-wrapper {
    position: fixed;
    top: 4.375rem;
    right: 0;
    width: 20%;
    height: calc(100vh - 4.375rem - 6.25rem);

    & > div {
      height: 100%;
    }

    :deep(.content) {
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 0.3125rem;
        height: 0.3125rem;
        background-color: transparent;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 0.625rem;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--ln-scroll-bar-color);
        border-radius: 0.625rem;
      }
    }
  }

  .outline {
    padding: 0.3125rem;
  }
}
</style>
