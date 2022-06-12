<template>
  <div id="app">
    <!-- usually we'll have router here -->
    <MainPage />
  </div>
</template>

<script>
import '@/styles/colors.sass'

import MainPage from './views/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,500&display=swap')
@import "@/styles/screens"

*
  margin: 0
  padding: 0
  

body
  overflow-x: hidden
  font-family: 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

#app
  background-color: var(--main-bg-color)
  color: var(--main-font-color)
  font-size: 17px
  width: 100vw
  height: 100vh

  @include mobile
    font-size: 14px

</style>
