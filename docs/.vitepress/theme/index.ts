import { createApp } from 'vue'
import Layout from './components/Layout.vue'
import 'vitepress/dist/client/theme-default/styles/fonts.css'
// import "vitepress/dist/client/theme-default/styles/vars.css";
import 'vitepress/dist/client/theme-default/styles/base.css'
import 'vitepress/dist/client/theme-default/styles/utils.css'
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-sponsor.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'
import './style/index.scss'
export default {
  Layout,
  NotFound: () => 'custom 404',
  enhanceApp({ app }: { app: ReturnType<typeof createApp> }) {},

  setup() {},
}
