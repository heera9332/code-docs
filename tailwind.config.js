/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Custom components
    "./docs/**/*.{md,mdx}", // Documentation files
    "./blog/**/*.{md,mdx}", // Blog files
    "./node_modules/@docusaurus/theme-classic/**/*.{js,jsx,ts,tsx}", // Docusaurus themes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
