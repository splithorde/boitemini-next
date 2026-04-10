import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        slate: { 50: '#f8fafc', 400: '#94a3b8', 700: '#334155', 800: '#1e293b', 900: '#0f172a' },
        amber: { 500: '#d97706' },
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;