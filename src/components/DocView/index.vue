<template>
    <main class="main">
    <div class="main__content">
        <div class="main__header">
            <font-awesome-icon icon="fa-solid fa-user" class="main__header__icon" />
            <div class="main__header__text">Documents</div>
        </div>
        <div class="main__subheader">Managing all your documents in one place</div>


        <DocFilters @filter="applyFilters" />

        <DocTable
            :docs="docs"
            :startDate="startDate"
            :endDate="endDate"
        />

    </div>
          
    <Footer />

    </main>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faUser)

import Footer from '@/components/Footer'

import DocFilters from './components/DocFilters'
import DocTable from './components/DocTable'


export default {
  props: {
    /**
     * List of docs
     */
    docs: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },

  components: {
    Footer,
    DocFilters,
    DocTable
  },

  data() {
    return {
      startDate: null,
      endDate: null,
    }
  },

  methods: {

    applyFilters(filter) {
      ({startDate: this.startDate, endDate: this.endDate } = filter);
    },

  }
}
</script>


<style lang="sass" scoped>
@import "@/styles/screens"
.main 
  background-color: var(--secondary-bg-color)
  padding: 50px 50px 25px
  flex-grow: 1
  overflow-y: auto
  display: flex
  flex-direction: column
  box-sizing: border-box
  max-height: calc(100vh - 70px)

  @include tablet
    max-height: calc(100vh - 50px)

  @include mobile
    padding: 10px 20px

  @include small-mobile
    padding: 10px 0

  &__content
      flex-grow: 1

  &__header
      font-size: 2.35em
      font-weight: bold
      padding-bottom: 5px
      display: flex

      @include mobile
          font-size: 1.5em

      @include small-mobile
          margin-left: 20px

      &__icon
          padding-right: 30px

          @include mobile
            display: none

  &__subheader
      opacity: 0.6
      padding-bottom: 50px

      @include mobile
        display: none
</style>
