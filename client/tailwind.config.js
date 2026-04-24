/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1E3A8A',
        'bright-blue': '#2563EB',
        'brand-green': '#00A550',
        'brand-red': '#CC0000',
        'soft-gray': '#F7F8FA',
        'body-dark': '#1A1A1A',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      letterSpacing: {
        display: '0.05em',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 4px 16px rgba(30, 58, 138, 0.08), 0 2px 4px rgba(30, 58, 138, 0.06)',
      },
    },
  },
  plugins: [],
};
