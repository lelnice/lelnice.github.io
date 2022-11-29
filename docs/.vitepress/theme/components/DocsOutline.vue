<template>
  <div class="docs_outline">
    <VPDocAsideOutlineItem
      :headers="headers"
      :root="true"
      :onClick="handleClick"
    ></VPDocAsideOutlineItem>
  </div>
</template>
<script lang="ts" setup>
import { type DefaultTheme, useData } from 'vitepress'
import { getHeaders } from 'vitepress/dist/client/theme-default/composables/outline.js'
import VPDocAsideOutlineItem from 'vitepress/dist/client/theme-default/components/VPDocAsideOutlineItem.vue'
import { computed, inject, ref, type Ref } from 'vue'
const { frontmatter, theme } = useData()
const headers = ref([])
const pageOutline = computed<DefaultTheme.Config['outline']>(
  () => frontmatter.value.outline ?? theme.value.outline
)
const onContentUpdated = inject('onContentUpdated') as Ref<() => void>
onContentUpdated.value = () => {
  headers.value = getHeaders(pageOutline.value)
}
function handleClick({ target: el }: Event) {
  const id = '#' + (el as HTMLAnchorElement).href!.split('#')[1]
  const heading = document.querySelector<HTMLAnchorElement>(
    decodeURIComponent(id)
  )
  heading?.focus()
}
</script>
