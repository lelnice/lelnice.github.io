<template>
  <Header />
  <Container>
    <HomePage v-if="frontmatter.layout === 'home'" />
    <DocsPage v-if="frontmatter.layout === 'docs'" />
    <Content v-else></Content>
  </Container>
  <Footer />
</template>
<script lang="ts" setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Container from './Container.vue'
import HomePage from '../pages/HomePage.vue'
import DocsPage from '../pages/DocsPage.vue'
import { Content, useData } from 'vitepress'
const { frontmatter } = useData()
</script>
<style lang="scss" scoped></style>
