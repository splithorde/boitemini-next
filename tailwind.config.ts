import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: { 850: '#1e293b' },
        accent: '#EAB308', // Hazard Yellow
      },
    },
  },
  plugins: [],
};
export default config;