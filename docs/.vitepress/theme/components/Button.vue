<template>
  <div role="button" class="button">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.button {
  padding: 0.625rem 0.9375rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--ln-text);
  cursor: pointer;
  user-select: none;
  background-color: var(--ln-button-color);
  border-radius: 0.625rem;
  transition: background-color 0.5s;

  &:hover,
  &.active {
    color: var(--ln-button-active-text);
    background-color: var(--ln-button-active);
  }

  &.logo {
    padding: 0.9375rem 1.25rem;
    font-size: 2.5rem;
    border-radius: 1.25rem;
  }
}
</style>
