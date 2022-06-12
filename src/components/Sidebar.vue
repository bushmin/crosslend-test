<template>
  <nav class="sidebar">
    <div class="sidebar__menu">

      <a class="sidebar__menu__item">
        <font-awesome-icon icon="fa-solid fa-chart-line" />
        <div class="sidebar__menu__item__text">Home</div>
      </a>
      <a class="sidebar__menu__item sidebar__menu__item--active">
        <font-awesome-icon icon="fa-solid fa-file-lines" />
        <div class="sidebar__menu__item__text">Documents</div>
      </a>
      <a class="sidebar__menu__item">
        <font-awesome-icon icon="fa-solid fa-address-card" />
        <div class="sidebar__menu__item__text">Contacts</div>
      </a>

    </div>
  </nav>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileLines, faChartLine, faAddressCard } from '@fortawesome/free-solid-svg-icons'
library.add(faFileLines, faChartLine, faAddressCard)

export default {}
</script>


<style lang="sass" scoped>
@import "@/styles/screens"

.sidebar
  width: 250px
  flex-shrink: 0
  flex-grow: 0
  z-index: 1

  box-shadow: 10px 0px 14px -3px rgba(0,0,0,0.15)
  

  &__menu
    margin-top: 50px
    overflow-y: auto
  
    &__item
      height: 60px
      padding-left: 30px
      font-weight: 700
      display: flex
      align-items: center
      opacity: 0.5
      border-left: 5px solid transparent
      cursor: pointer
  
      &:hover
        opacity: 0.8
  
      &--active
        opacity: 1
        border-left: 5px solid var(--main-action-color)
      
      &__text
        padding-left: 20px


@include tablet
  .sidebar
    display: none
  
</style>
