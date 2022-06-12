<template>
  <header class="header">
    <div class="header__icon-wrapper">
      <Logo class="header__icon"/>
    </div>

    <div class="header__menu header__menu--notification">
      <font-awesome-icon
        class="header__menu__icon"
        icon="fa-solid fa-bell"
      />
    </div>


    <div class="header__burger">
      <font-awesome-icon
        @click="toggleMenuHandler"
        class="header__burger__icon"
        icon="fa-solid fa-bars"
      />
      <Menu
        @click.stop
        v-if="contextMenuVisible"
        class="header__context-menu"
        :name="name"
        v-click-outside="hideMenu"
      />
    </div>

    <div class="header__menu">
      <div class="header__avatar">{{initials}}</div>
      <div class="header__user">
        <div class="header__user__name">{{name}}</div>
        <div class="header__user__role">{{displayedRole}}</div>
      </div>
      <font-awesome-icon icon="fa-solid fa-caret-down" />
    </div>
  </header>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faBars, faBell } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretDown, faBars, faBell)

import Logo from "@/assets/Company.svg"
import Menu from '@/components/ContextMenus/Menu'
import {prettyRole} from '@/utils'

export default {
  components: {
    Logo,
    Menu
  },

   props: {
    /**
     * Full name of user
     */
    name: {
      type: String,
      default: ''
    },

    /**
     * Role of user
     */
    role: {
      type: String,
      default: ''
    },
  },

  data() {
    return {
      contextMenuVisible: false
    }
  },

 computed: {
    initials() {
      return this.name.split(' ').map(word => word.slice(0,1)).join('')
    },
    displayedRole(){
      return prettyRole(this.role)
    }
  },


  methods: {
    toggleMenuHandler(){
        this.contextMenuVisible = !this.contextMenuVisible;
    },
    hideMenu(){
      this.contextMenuVisible = false;
    }
  }
}
</script>


<style lang="sass" scoped>
@import "@/styles/screens"

.header
  background-color: var(--main-action-color)
  color: var(--secondary-font-color)
  height: 70px
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  flex-grow: 0
  flex-shrink: 0

  @include tablet
    height: 50px

  &__icon-wrapper
    flex-grow: 2
    height: 100%
    display: flex
    justify-content: flex-start
    align-items: center

  &__icon
    color: var(--secondary-font-color)
    margin-left: 70px
    width: 69px
    cursor: pointer

    @include tablet
      margin-left: 20px
      width: 53px


  &__burger
    display: none

    @include tablet
      display: flex
      justify-content: center
      align-items: center
      cursor: pointer
      position: relative

    &__icon
      width: 20px
      height: 20px
      padding: 15px

  &__context-menu
    position: absolute
    top: 50px
    right: 0
    

  &__menu
    height: 100%
    padding: 16px 40px
    border-left: 1px solid var(--main-bg-color)
    display: flex
    align-items: center
    cursor: pointer

    &:hover
      opacity: 0.9

    &--notification
      width: 90px
      padding: 0
      display: flex
      justify-content: center
      align-items: center
      position: relative

      & .header__menu__icon
        height: 22px
        width: 22px

      &:after
        content: ''
        position: absolute
        top: 25px
        right: 35px
        width: 7px
        height: 7px
        border-radius: 50%
        background-color: var(--secondary-action-color)

    @include tablet
      display: none



  &__avatar
    width: 45px
    height: 45px
    display: flex
    justify-content: center
    align-items: center

    border: 1px solid var(--main-bg-color)
    background-color: var(--no-avatar-color)
    border-radius: 50% 

    margin-right: 16px


  &__user
    margin-right: 100px
    position: relative

    &__name
      font-size: 0.88em
      font-weight: 300
      padding-bottom: 2px

    &__role
      font-size: 0.76em
      font-weight: 700
      text-transform: lowercase
      
      &::first-letter 
        text-transform: uppercase
        

</style>