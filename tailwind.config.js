module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cross-hatched': 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.25) 0px, rgba(255, 255, 255, 0.25) 1px, transparent 1px, transparent 8px)',
        'blue-cross-hatched': `repeating-linear-gradient(45deg, #6955EA 0px, #6955EA 1px, transparent 1px, transparent 5px)`,
      },
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#352D66',
        'acuity-0': '#4f91e4',  // Calm blue
        'acuity-0-hover': '#3c7bca', // Slightly darker blue
        'acuity-1': '#5a77d6',  // Blue with a hint of purple
        'acuity-1-hover': '#4862b8',
        'acuity-2': '#6a4fcf',  // More purple
        'acuity-2-hover': '#563fb1',
        'acuity-3': '#8535c4',  // Transition to a darker purple
        'acuity-3-hover': '#6b2a9d',
        'acuity-4': '#a62699',  // Purple-red mix
        'acuity-4-hover': '#861e7c',
        'acuity-5': '#8b0e3e',  // Maroon with a hint of red
        'acuity-5-hover': '#720b32', // Darker maroon
        customBg: '#F4F8FD',
        customBlue: {
          light: '#AEA2FF',
          DEFAULT: '#6955EA',
          dark: '#352D66',
        },
        acuityHigh: '#FF5A5F', // example color, replace with actual color from Figma
        acuityMid: '#FFC107',  // example color, replace with actual color from Figma
        acuityLow: '#28A745',  // example color, replace with actual color from Figma
        headerBg: '#F0F4FF',   // example color, replace with actual color from Figma
        headerText: '#2D3A4B', // example color, replace with actual color from Figma
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      zIndex: {
        '50': '50',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '70%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' }, // Adjust the scale to control the growth
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 1.5s infinite',
        'grow-animation': 'grow 5s ease-in-out infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'ul > li::marker': {
              color: theme('colors.black'), // Change bullet points to black
            },
            'ol > li::marker': {
              color: theme('colors.black'), // Change ordered list numbers to black
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'), // For the `prose` class
    function ({ addBase }) {
      addBase({
        'button:focus': {
          '@apply outline-none': {},
        },
      });
    },
  ],
}