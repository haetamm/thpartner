import '@mdi/font/css/materialdesignicons.css'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
// import 'vuetify/dist/vuetify-labs.min.css'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VDatePicker
    }
  })
  app.vueApp.use(vuetify)
})
