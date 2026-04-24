/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Unbounded'", "sans-serif"],
        body:    ["'Bricolage Grotesque'", "sans-serif"],
        mono:    ["'Space Mono'", "monospace"],
      },
      colors: {
        paper:  '#f5f0e8',
        paper2: '#ede8dc',
        ink:    '#0a0a0f',
        ink2:   '#3a3848',
        ink3:   '#7a7890',
        amber: {
          DEFAULT: '#e8920a',
          light:   '#fdecc8',
          dark:    '#7a4a00',
        },
        teal: {
          DEFAULT: '#0d9e7a',
          light:   '#d0f5eb',
          dark:    '#054d3a',
        },
        coral: {
          DEFAULT: '#e05c3a',
          light:   '#fde8e2',
          dark:    '#7a2510',
        },
      },
    },
  },
  plugins: [],
}
