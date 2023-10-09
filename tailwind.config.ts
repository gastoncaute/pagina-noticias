import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        pageColor: '#86082E',
        gradientColor: '#A32D41',
      },
      width: {
        '65rem': '65rem',
        '60rem' : '60rem'
      },
      transitionDuration: {
        '1500': '1500ms'
      },
      translate: {
        '200' : '200%'
      }
    },
  },
  plugins: [],
}
export default config
