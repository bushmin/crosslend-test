<template>
  <div class="page">

    <Header
      :name="userName"
      :role="userRole"
    />

    <div class="page__content">
      <Sidebar />
      <DocView :docs="docxAndPdfDocs"/>
    </div>
    
  </div>
</template>

<script>

import { v4 as uuidv4 } from 'uuid';

import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import DocView from '@/components/DocView'

export default {
  name: 'MainPage',
   components: {
    Header,
    Sidebar,
    DocView
  },

  data() {
    return {
      docs: [],
      userInfo: {}
    }
  },

  computed: {
    userName() {
      const firstName =  this.userInfo?.body?.User?.profile?.firstName;
      if (!firstName) return '';
      const lastName =  this.userInfo?.body?.User?.profile?.lastName;
      return `${firstName} ${lastName}`
    },
    userRole() {
      return this.userInfo?.body?.User?.roles?.[0] || '';
    },
    docxAndPdfDocs(){
      return this.docs.filter(doc => doc.name?.endsWith('.docx') || doc.name?.endsWith('.pdf'))
    }
  },


  mounted() {
    this.fetchInfo(); //imitate fetching; can't get from https://frontend.apply because of CORS
  },

  methods: {
    async fetchInfo() {
      const serverDocs = fetch('./data/documents.json');
      const serverUserInfo = fetch('./data/userInfo.json');

      const [docs, userInfo] = await Promise.all([serverDocs, serverUserInfo])
      const [docsJson, userInfoJson] = await Promise.all([docs.json(), userInfo.json()])

      this.docs = this.addIDToDocs(docsJson.documents);
      this.userInfo = userInfoJson;
    },

    addIDToDocs(docs) {
      //we need to differentiate docs in component
      return docs.map(doc => { return {...doc, id: uuidv4()} });
    }
  }

}
</script>


<style lang="sass" scoped>
.page
  display: flex
  flex-direction: column
  min-height: 100%

  &__content
    display: flex
    flex-direction: row
    justify-content: stretch
    align-items: stretch
    flex-grow: 2
</style>
