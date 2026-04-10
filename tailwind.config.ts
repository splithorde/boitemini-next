import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#1e293b',
          800: '#334155',
        },
        amber: {
          500: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
};
export default config;