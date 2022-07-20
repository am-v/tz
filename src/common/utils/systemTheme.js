// eslint-disable-next-line no-confusing-arrow
const getSystemTheme = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

export default getSystemTheme;
