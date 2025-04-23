<template>
  <div>
    <HeaderComp />
    <router-view />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,  // Register the component here
  },
}
</script>

<style>

</style>
