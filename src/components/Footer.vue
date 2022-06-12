<template>
  <footer class="footer">

      <a class="footer__link">
        &copy; Copyrights
      </a>
      <a class="footer__link">
        All rights reserved
      </a>
      <a class="footer__link">
        Imprint
      </a>
      <a class="footer__link">
        Terms of use
      </a>
      <a class="footer__link">
        Privacy policy
      </a>

  </footer>
</template>

<script>
export default {}
</script>


<style lang="sass" scoped>
@import "@/styles/screens"

.footer
  width: 100%
  margin: 25px auto 0
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center

  &__link
    font-size: 0.76em
    padding: 0 10px
    opacity: 0.5
    color: var(--main-font-color)
    border-right: 1px solid var(--main-font-color)
    cursor: pointer

    &:hover
      opacity: 1

    &:last-child
      border-right: none

  @include mobile
    width: 230px
    
    &__link:nth-child(2)
      border-right: none


</style>
