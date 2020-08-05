<template>
  <v-container
    class="ma-0 pa-0"
    fluid
  >
    <app-api-call
      class="ma-0 pa-0 mx-3"
      :class="{ 'mt-6': $store.state.user.isAuthenticated, 'mt-12': !$store.state.user.isAuthenticated }"
      :call-result="callResult"
    />

    <v-row
      class="ma-0 pa-0 justify-center text-center"
      :class="{ 'mt-6': $store.state.user.isAuthenticated, 'mt-12': !$store.state.user.isAuthenticated }"
    >
      <v-col
        class="ma-0 pa-0 justify-center text-center"
        xl="6"
        lg="8"
        md="8"
        sm="12"
        xs="12"
        cols="12"
      >
        <pdf
          v-for="i in numPages"
          :key="i"
          :src="pdfDocumentLoadingTask"
          :page="i"
          class="ma-0 mx-5 mb-5"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  name: 'UseOfCookies',
  components: {
    pdf
  },
  data () {
    return {
      callResult: { finished: false, authorized: false, error: null, info: null },
      pdfDocumentLoadingTask: {},
      numPages: undefined
    }
  },
  mounted () {
    this.pdfDocumentLoadingTask = pdf.createLoadingTask('https://media.readthedocs.org/pdf/flask-cors/latest/flask-cors.pdf')
    // this.pdfDocumentLoadingTask = pdf.createLoadingTask(require('@/assets/cookie.pdf'))
    this.pdfDocumentLoadingTask.promise
      .then(pdf => {
        this.numPages = pdf.numPages
      })
      .finally(() => {
        this.callResult.finished = true
      })
  }
}
</script>
