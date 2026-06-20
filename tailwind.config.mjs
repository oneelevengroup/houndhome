/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2C302F',
        teal: { DEFAULT: '#2E4A4E', deep: '#233A3D' },
        sage: { DEFAULT: '#94A98C', soft: '#DCE3D6' },
        camel: '#C9A57B',
        cream: '#F5F1E8',
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
        body: ['Mulish', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Type scale from CLAUDE.md §2
        display: ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        h1: ['2.5rem', { lineHeight: '1.1' }],
        h2: ['1.75rem', { lineHeight: '1.2' }],
        h3: ['1.25rem', { lineHeight: '1.3' }],
        body: ['1rem', { lineHeight: '1.6' }],
        caption: ['0.875rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(44, 48, 47, 0.04), 0 8px 24px rgba(44, 48, 47, 0.06)',
        lift: '0 4px 8px rgba(44, 48, 47, 0.06), 0 16px 40px rgba(44, 48, 47, 0.10)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
