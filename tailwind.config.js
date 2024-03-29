/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {backgroundImage: {
      'hero-pattern': "url('/src/assets/images/bg.png)",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#726d6d",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
     
    ],
  },
  
  plugins: [require("daisyui"),
  require('@tailwindcss/forms')],
}
