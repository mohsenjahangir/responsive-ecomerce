/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    extend: {   
       width:{
      1700:'1700px',
      90:'90%',
      1200:'1200px',
      1000:'1000px',
      880:'880px'

    },
    margin:{
      49:"197px"
    },
  screens:{
    mobile:'412px'
  },
  margin:{
    540:"540px"
  },
  
  },
  },
  plugins: [],
}