/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-custom': '#facc15',           // custom yellow
        'neon-purple': 'rgb(var(--neon-purple))',
        'electric-blue': 'rgb(var(--electric-blue))',
        'toxic-green': 'rgb(var(--toxic-green))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
      },
      boxShadow: {
        'neon-purple': '0 0 5px rgba(var(--neon-purple), 0.5), 0 0 20px rgba(var(--neon-purple), 0.3)',
        'neon-blue': '0 0 5px rgba(var(--electric-blue), 0.5), 0 0 20px rgba(var(--electric-blue), 0.3)',
        'neon-green': '0 0 5px rgba(var(--toxic-green), 0.5), 0 0 20px rgba(var(--toxic-green), 0.3)',
      },
    },
  },
  plugins: [],
};
