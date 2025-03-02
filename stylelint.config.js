/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'unit-allowed-list': ['em', 'rem', '%', 'vh', 'svh', 'vw', 'svw'],
  },
}
