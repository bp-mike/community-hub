/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary-blue": {
          100: 'var(--primary-blue-100)',
        },
        "primary-orange": {
          100: 'var(--primary-orange-100)',
          200: 'var(--primary-orange-200)',
        }
      },
      screens: {
        // 'sm': {'min': '640px', 'max': '767px'},
        // // => @media (min-width: 640px and max-width: 767px) { ... }
  
        // 'md': {'min': '768px', 'max': '1023px'},
        // // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        // 'lg': {'min': '1024px', 'max': '1279px'},
        // // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        // 'xl': {'min': '1280px', 'max': '1535px'},
        // // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        // '2xl': {'min': '1536px'},
        // // => @media (min-width: 1536px) { ... }

        // 'sm': '640px',
        // // => @media (min-width: 640px) { ... }
  
        // 'md': '768px',
        // // => @media (min-width: 768px) { ... }
  
        // 'lg': '1024px',
        // // => @media (min-width: 1024px) { ... }
  
        // 'xl': '1280px',
        // // => @media (min-width: 1280px) { ... }
  
        // '2xl': '1536px',
        // // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
