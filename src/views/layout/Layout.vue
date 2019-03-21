<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <a-button type="primary">Primary</a-button>
      <Navbar/>
    </a-layout-header>
    <a-layout-content>
      <section class="app-main">
        <transition name="fade-transform">
          <router-view/>
        </transition>
      </section>
    </a-layout-content>
    <a-layout-footer>
      <Footer/>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="less">
@import "../../assets/less/reset";
</style>
