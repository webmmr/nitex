/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        banner: "url('/assets/hero-bg.svg')",
        footer: "url('/assets/footer-bg.svg')",
        contact: "url('/assets/subscribe-bg.svg')",
      }),
      colors: {
        brand: "#2944D9",
        brandDark: "#223ABE",
      },
    },
  },
  plugins: [],
};
