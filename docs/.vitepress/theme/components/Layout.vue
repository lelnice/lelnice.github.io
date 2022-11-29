<template>
  <Header />
  <Container>
    <HomePage v-if="frontmatter.layout === 'home'" />
    <DocsPage v-else />
  </Container>
  <Footer />
</template>
<script lang="ts" setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Container from './Container.vue'
import HomePage from '../pages/HomePage.vue'
import DocsPage from '../pages/DocsPage.vue'
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>
<style lang="scss" scoped></style>
