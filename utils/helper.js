export function getDescription (desc) {
  const cleanedString = desc.replace(/<\/?div>/g, '')

  const trimmedString = cleanedString.substring(0, 120)

  return `${trimmedString}...`
}
