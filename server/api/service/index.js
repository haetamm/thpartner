import { getData } from '~/source/services'

export default defineEventHandler(() => {
  const services = getData()

  return services
})
