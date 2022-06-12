<template>
  <div class="context-menu">
    <div class="context-menu__item">Home</div>
    <div class="context-menu__item context-menu__item--active">Documents</div>
    <div class="context-menu__item">Contacts</div>
    <div class="context-menu__divider" />
    <div class="context-menu__item">{{name}}</div>

  </div>
</template>

<script>
export default {

    props: {
    /**
     * Full name of user
     */
    name: {
      type: String,
      default: ''
    },
  },

}
</script>

<style lang="sass" scoped>
.context-menu
    z-index: 10
    width: 150px
    padding: 8px 0
    font-size: 0.82em
    background-color: var(--main-bg-color)
    color: var(--main-font-color)
    box-shadow: -5px 5px 23px -8px rgba(0,0,0,0.2)

    &__item
        height: 35px
        display: flex
        justify-content: flex-start
        align-items: center
        padding-left: 16px
        cursor: pointer

        &--active
            background-color: var(--main-action-color)
            color: var(--secondary-font-color)
    
    &__divider
        height: 1px
        margin: 5px 0
        background-color: var(--hairline-color)
</style>
