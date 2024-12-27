/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class', ['data-mode="dark"']],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        black: '#000',

        gray100: '#E1E1E6',
        gray200: '#A9A9B2',
        gray400: '#7C7C8A',
        gray500: '#505059',
        gray600: '#323238',
        gray700: '#29292E',
        gray800: '#202024',
        gray900: '#121214',

        ignite300: '#00B37E',
        ignite500: '#00875F',
        ignite700: '#015F43',
        ignite900: '#00291D',
      },
      fontFamily: {
        default: 'Roboto, sans-serif',
        code: 'monospace',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },
      fontSize: {
        xxs: '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.25rem',
        '6xl': '3rem',
        '7xl': '4rem',
        '8xl': '4.5rem',
        '9xl': '6rem',
      },
      lineHeight: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
      },
      borderRadius: {
        px: '1px',
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '16px',
        full: '99999px',
      },
      space: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        40: '10rem',
        64: '16rem',
        80: '20rem',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slideDownAndFade: {
					from: { opacity: "0", transform: "translateY(-2px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideLeftAndFade: {
					from: { opacity: "0", transform: "translateX(2px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				slideUpAndFade: {
					from: { opacity: "0", transform: "translateY(2px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideRightAndFade: {
					from: { opacity: "0", transform: "translateX(-2px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out',
        slideOut: 'slideOut 0.5s ease-in-out',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      dropShadow: {
        'tooltip-content': '4px 16px 24px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

