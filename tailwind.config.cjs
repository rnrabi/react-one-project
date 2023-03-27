/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1C2B35",
        
"secondary": "#f453b9",
        
"accent": "#77f9bb",
        
"neutral": "#181622",
        
"base-100": "#ffffff",
        
"info": "#53ACD0",
        
"success": "#47E1B5",
        
"warning": "#FAD20A",
        
"error": "#F1766F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
