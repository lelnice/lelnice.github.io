<template>
  <div class="wrapper" :class="[props.direction]">
    <div class="inner-wrapper">
      <div class="content"><slot></slot></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
const props = defineProps({
  direction: {
    type: String as PropType<'bottom' | 'top' | 'left'>,
    default: 'bottom',
  },
})
</script>
<style lang="scss" scoped>
$padding: 0.1875rem;

.wrapper {
  width: 100%;
  background-color: var(--ln-wrapper-color);
  border: 0.125rem solid #000;

  .inner-wrapper {
    width: 100%;
    height: 100%;
    background-color: var(--ln-inner-wrapper-color);

    .content {
      width: inherit;
      height: inherit;
      background-color: skyblue;
    }
  }

  &.bottom {
    padding-bottom: $padding;

    .inner-wrapper {
      padding-bottom: inherit;
      border-bottom: inherit;

      .content {
        border-bottom: inherit;
      }
    }
  }

  &.top {
    padding-top: $padding;

    .inner-wrapper {
      padding-top: inherit;
      border-top: inherit;

      .content {
        border-top: inherit;
      }
    }
  }

  &.left {
    padding-left: $padding;

    .inner-wrapper {
      padding-left: inherit;
      border-left: inherit;

      .content {
        border-left: inherit;
      }
    }
  }
}
</style>
