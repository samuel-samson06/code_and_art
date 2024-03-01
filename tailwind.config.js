/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'boogaloo':['Boogaloo',"cursive"],
        'fredoka':['Fredoka','cursive'],
        'architect':['ArchitectDaughter','cursive'],
        'fredoka2':['Fredoka2','cursive'],
        'fredoka3':['Fredoka3','cursive'],
        'fredoka4':['Fredoka4','cursive']
      }
    },
  },
  plugins: [],
}

