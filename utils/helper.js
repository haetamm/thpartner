export const times = ['08:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00']

export const splitItemsIntoGroups = (times) => {
  const timeGroup = []
  const groupSize = 4
  for (let i = 0; i < times.length; i += groupSize) {
    const group = times.slice(i, i + groupSize)
    timeGroup.push(group)
  }
  return timeGroup
}

export const allowedDates = (val) => {
  const selectedDate = new Date(val)
  const today = new Date()
  today.setHours(0, 0, 0, 0) // untuk memastikan perbandingan tanggal yang akurat
  const thirtyDaysLater = new Date()
  thirtyDaysLater.setDate(thirtyDaysLater.getDate() + 30)

  return (
    selectedDate >= today &&
    selectedDate <= thirtyDaysLater &&
    selectedDate.getDay() !== 0 &&
    selectedDate.getDay() !== 6
  )
}

export function getDescription (desc) {
  const cleanedString = desc.replace(/<\/?div>/g, '')

  const trimmedString = cleanedString.substring(0, 120)

  return `${trimmedString}...`
}
