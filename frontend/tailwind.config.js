/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#ffffff',
          // primary: '#DBDDE2',
          // secondary: '#000300',
          secondary: '#1E2329',
          hover: '#313338',
          // ... other light mode colors
        },
        dark: {
          primary: '#1E2329',
          secondary: '#DBDDE2',
          backgroundColor: '#313338',
          hover: '#313338',
          // ... other dark mode colors
        },
      },
    },
  },
  plugins: [],
}

