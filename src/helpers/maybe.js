const maybe = (maybeName, defaultValue = '', locale = 'en') => {
  if (!maybeName) return defaultValue
  return maybeName[locale] || defaultValue
}

export default maybe
