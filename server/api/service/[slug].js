import { getData } from '~/source/detail-service'

export default defineEventHandler((event) => {
  const { slug } = event.context.params

  const allServices = getData()
  const service = allServices.find(service => service.slug === slug) || {}

  return service
})
