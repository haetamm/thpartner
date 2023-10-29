import { getData } from '~/source/team'

export default defineEventHandler(() => {
  const teams = getData()

  return teams
})
