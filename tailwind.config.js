/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        xs: '500px'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
