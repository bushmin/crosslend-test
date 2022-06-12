<template>
  <div class="filter-wrapper">

      <button
          class="toggle-filter-button filter-button"
          @click="toggleFilterHandler"
        >
        <font-awesome-icon icon="fa-solid fa-filter" />
          Filters
      </button>

      <div
        class="filters"
        :class="{'filters--hidden': !filtersVisible}"
        v-click-outside="hideFilter"
      >

        <date-picker
          class="datepicker"
          v-model="startDate"
          valueType="YYYY-MM-DD"
          format="DD.MM.YYYY"
          placeholder="From"
          :append-to-body="false"
        >
          <template #icon-calendar>
            <font-awesome-icon class="datepicker__icon" icon="fa-solid fa-calendar-days" />
          </template>
        </date-picker>

        <date-picker
          class="datepicker"
          v-model="endDate"
          valueType="YYYY-MM-DD"
          format="DD.MM.YYYY"
          placeholder="To"
          :append-to-body="false"
        >
          <template #icon-calendar>
            <font-awesome-icon class="datepicker__icon" icon="fa-solid fa-calendar-days" />
          </template>
        </date-picker>

        <div class="filter-divider" />

        <button
          class="filter-button"
          @click="applyFiltersHandler()"
        >
          Apply filters
        </button>
        <button
          class="filter-button filter-button--clear"
          @click="clearFiltersHandler()"
        >
          Clear filters
        </button>

      </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarDays, faFilter } from '@fortawesome/free-solid-svg-icons'
library.add(faCalendarDays, faFilter)

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

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
    DatePicker
},

data() {
    return {
        filtersVisible: false,
        startDate: null,
        endDate: null,
    }
},

methods: {
    applyFiltersHandler() {
        this.$emit('filter', {startDate: this.startDate, endDate: this.endDate});
        this.hideFilter();
    },

    clearFiltersHandler() {
        this.startDate = null;
        this.endDate = null;
        this.$emit('filter', {});
        this.hideFilter();
    },

    toggleFilterHandler() {
      this.filtersVisible = !this.filtersVisible;
    },

    hideFilter(){
      this.filtersVisible = false;
    }
}

}
</script>

<style lang="sass">
@import "@/styles/screens"

.datepicker .mx-input
  width: 140px
  height: 40px
  border: none
  padding-left: 10px
  font-size: 1em

  @include mobile
    width: 100%
    height: 35px
    
</style>

<style lang="sass" scoped>
@import "@/styles/screens"

.filter-wrapper
  position: relative

  @include small-mobile
    margin-left: 20px

.datepicker 
  width: 140px
  height: 40px
  margin-right: 10px
  background-color: var(--main-bg-color)
  box-sizing: border-box


  &__icon 
    position: absolute
    opacity: 0.6
    right: 10px
    top: 0
    bottom: 0
    margin: auto
    pointer-events: none


.filter-divider
  display: none


.filter-button 
  height: 36px
  width: 130px
  margin-left: 20px
  font-size: 0.94em
  display: inline-flex
  justify-content: center
  align-items: center
  background-color: var(--secondary-action-color)
  border: none
  border-radius: 20px
  color: var(--secondary-font-color)
  cursor: pointer

  &--clear 
    background-color: var(--main-action-color)

  &:hover 
    transform: translateY(-1px)


.toggle-filter-button
  display: none

  @include mobile
    display: block
    width: 110px
    height: 32px
    margin-left: 0


.filters
  @include mobile
    position: absolute
    top: 40px
    width: 220px
    padding: 10px 0
    box-sizing: border-box
    background-color: var(--secondary-bg-color)
    box-shadow: 0px 0px 23px 5px rgba(0,0,0,0.2)
    z-index: 10
    display: flex
    flex-direction: column
    align-items: center

    &--hidden
      display: none

    .datepicker
      margin: 5px 10px
      width: calc(100% - 20px)
      height: 35px

    .filter-divider
      display: block
      height: 1px
      width: 100%
      margin: 10px 0
      background-color: var(--hairline-color)

    .filter-button
      margin: 5px 0
      width: calc(100% - 20px)
      height: 32px


</style>