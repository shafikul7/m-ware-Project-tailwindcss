/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': '#0060AF',
      'secondary': '#00A88E',
      'dark': '#333333',
      'headerBgSm': '#002B4F',
      'headerBgLg': '#333333',
      'formBg': '#F9FAFB',
      'hoverColor': '#13AF88',
      'bannerBg': '#ECF5F8',
      'paraColor':'#344054',
    },
extend: {

  backgroundImage: {
    'footer-large': "url('/assets/Footer.png')",
    'footer-small': "url('/assets/background.png')",
  },

  container: {
      "max-width": '1696px',  
  },

  fontSize: {
    xyl: ['32px', '44px'],
    xxl: ['80px', '90px'],
  },
},
 
},
  plugins: [],
}

