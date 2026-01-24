 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
     "./public/**/*.html",
  ],
  theme: {
  extend: {
    colors: {
      dark: "#0b0f1a",
      light: "#e5e7eb",
      neon: "#00ff9c",
      neonHover: "#00cc7a",
      muted: "#9ca3af",
    },
  },
},

}
