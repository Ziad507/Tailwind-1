/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md:'768px',
      lg: '1024px',
      
    },
    extend: {
      colors:{
        maincolor: "#010a5e",
        maincolorLight:"#010d78",
        secondarycolor:"#ffcc00",
        pragraphcolor:"#c0c0c0",
        greeencolor:"#007936",
        redcolor:"#cc3433",
        darkcolor:"#000",
        darkcolorlight:"#171717",
        whitecolor:"white",
        blackcolor:"black",
      },
      keyframes: {
        move: {
          "50%":  { transform: "translateY(-1rem)" }
        }
      },
      animation: {
        "movingY": "move 2s linear infinite"
      },

      fontFamily:{
        main: ["DM Mono,sans serif"],
        secondary: ["Nunito,sans serif"],
        oswald: ["Oswald,sans serif"],
      },
    },

    container:{
      center:true,
      padding:{
        default:"1rem",
        sm:"1.5rem"
      }
    },
  },
  plugins: [],
}

