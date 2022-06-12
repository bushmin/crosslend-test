<template>
<div>

    <ul v-if="filteredDocs.length" class="doc__list">
        <li class="doc__row doc__header">
            <div
                @click="sortDocsHandler('name')"
                class="col col__header col__sort col--1"
            >
                Document name
                <font-awesome-icon
                    icon="fa-solid fa-caret-down"
                    class="icon"
                    :class="{'icon--visible': sortKey==='name', 'icon--reverse': ascendingOrder}"
                />
            </div>
            <div class="col col__header col--2">Description</div>
            <div class="col col__header col--3">Owner</div>
            <div
                @click="sortDocsHandler('date')"
                class="col col__header col__sort col--4"
            >
                Created on
                <font-awesome-icon
                    icon="fa-solid fa-caret-down"
                    class="icon"
                    :class="{'icon--visible': sortKey==='date', 'icon--reverse': ascendingOrder}"
                />
            </div>
        </li>

        <li class="doc__row doc__item" v-for="doc in docsOnPage" :key="doc.id">
            <div class="col col--1" data-label="Document name" :title="doc.name">{{doc.name}}</div>
            <div class="col col--2" data-label="Description">{{doc.info || '-'}}</div>
            <div class="col col--3" data-label="Owner">{{doc.owner || '-'}}</div>
            <div class="col col--4" data-label="Created on">{{formattedDate(doc.date)}}</div>
        </li>

        <div class="doc__controls" v-if="totalPages>1">
            <button class="doc__controls__button" @click="choosePageHandler(currentPage-1)">&lt;</button>
            <button
                v-for="page in totalPages"
                :key="page"
                @click="choosePageHandler(page-1)"
                class="doc__controls__button"
                :class="{ 'doc__controls__button--active': page===currentPage+1}"
            >
            {{page}}
            </button>
            <button class="doc__controls__button" @click="choosePageHandler(currentPage+1)">&gt;</button>
        </div>
      </ul>

      <div v-else class="doc--not-found">No documents found with these filters!</div>
</div>
</template>

<script>
import {prettyDate, sortDocs} from '@/utils'

const DOCS_PER_PAGE = 4;

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
    /**
     * filter start date
     */
    startDate: {
        type: String,
        default: undefined
    },
        /**
     * filter start date
     */
    endDate: {
        type: String,
        default: undefined
    },
},

data() {
    return {
        currentPage: 0,
        sortKey: 'date',
        ascendingOrder: true
    }
  },

watch: {
    startDate(){
        this.currentPage = 0;
    },
    endDate(){
        this.currentPage = 0;
    }
},

computed: {
    filteredDocs() {
        return this.docs.filter(doc => {
            if (this.startDate && doc.date < this.startDate) return false;
            if (this.endDate && doc.date > this.endDate) return false;
            return true;
        })
    },

    sortedDocs() {
        return sortDocs(this.filteredDocs, this.sortKey, this.ascendingOrder)
    
    },

    totalPages(){
        const docsAmount = this.sortedDocs.length || 0;
        return Math.ceil(docsAmount/DOCS_PER_PAGE)
    },


    docsOnPage(){
        return this.sortedDocs.slice(
            this.currentPage*DOCS_PER_PAGE,
            (this.currentPage+1)*DOCS_PER_PAGE
        );
    },

},

methods: {

    sortDocsHandler(key) {
        if (this.sortKey === key) {
            this.ascendingOrder = !this.ascendingOrder;
        } else {
            this.sortKey = key;
            this.ascendingOrder = true;
        }

        this.currentPage = 0;
    },

    choosePageHandler(index) {
        if (index < 0 || index >= this.totalPages) return;
        this.currentPage = index;
    },

    formattedDate(date) {
        return prettyDate(date);
    }
}


}
</script>

<style lang="sass" scoped>
@import "@/styles/screens"
.doc
    &__list 
        width: 100%
        margin-top: 30px

        @include mobile
            margin-top: 20px
        
    
    &__row 
        padding: 15px 10px 15px 50px
        display: flex
        justify-content: space-between

        @include mobile
            padding: 7px 5px 7px 10px

        @include small-mobile
            padding: 10px 5px 10px 10px
  
    &__item 
        height: 60px
        box-sizing: border-box
        display: flex
        justify-content: space-evenly
        align-items: center
        border-bottom: 1px solid var(--hairline-color)
        background-color: var(--main-bg-color)

        @include mobile
            align-items: flex-start
            height: 50px


    &__controls 
        height: 70px
        display: flex
        justify-content: flex-end
        align-items: center
        padding: 0 30px
        background-color: var(--main-bg-color)

        @include mobile
            padding: 0 10px

        @include small-mobile
            height: 60px
  
        &__button 
            width: 35px
            height: 35px
            font-size: 1em
            margin: 0 4px
            display: flex
            justify-content: center
            align-items: center
            border: 1px solid var(--hairline-color)
            background-color: var(--main-bg-color)
            border-radius: 4px
            cursor: pointer
            user-select: none
            font-family: 'Roboto', Helvetica, Arial, sans-serif
  
            &--active 
                background-color: var(--main-action-color)
                color: var(--secondary-font-color)
  
            &:hover 
                transform: translateY(-1px)

            @include mobile
                width: 30px
                height: 30px
            
    &--not-found 
        margin: 20px 0 0 20px
        opacity: 0.5


.col 
    text-overflow: ellipsis
    overflow: hidden
    white-space: nowrap
    padding-right: 20px
    white-space: pre-wrap
    word-break: break-all
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical

    @include mobile
        height: 100%
        padding-right: 10px
        

    @include small-mobile
        line-height: 1.4em
        padding-right: 5px
        font-size: 0.8em
  
    &__header 
        opacity: 0.5

    &__sort 
        cursor: pointer
        user-select: none

        & .icon
            visibility: hidden
        & .icon--visible
            visibility: visible
        & .icon--reverse
            transform: rotate(180deg)

    &__sort:hover 
        opacity: 1

    &--1 
        flex-basis: 40%

    &--2 
        flex-basis: 25%

    &--3 
        flex-basis: 15%

    &--4 
        flex-basis: 20%
  
</style>