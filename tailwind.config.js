/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      'primary-light': 'var(--color-primary-light)',
      'primary-dark': 'var(--color-primary-dark)',

      space: 'var(--color-space)',
      'space-light': 'var(--color-space-light)',

      grey: 'var(--color-grey)',
      'grey-dark': 'var(--color-grey-dark)',

      card: 'var(--color-card)',
      invert: 'var(--color-invert)',

      brand: 'var(--color-brand)',
      'brand-dark': 'var(--color-brand-dark)',

      'brand-invert': 'var(--color-brand-invert)',

      white: 'var(--color-white)',
      black: 'var(--color-black)',
      warning: 'var(--color-warning)',
      danger: 'var(--color-danger)',
    },
    extend: {
      rotate: {
        360: '360deg',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
