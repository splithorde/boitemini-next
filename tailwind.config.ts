import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
          800: '#1e293b',
          600: '#475569',
        },
        amber: {
          500: '#d97706',
        },
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;