/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'unit-allowed-list': ['em', 'rem', '%', 'vh', 'svh', 'vw', 'svw', 's'],
    'custom-property-pattern': '[A-Z0-9]+(?:-[A-Z0-9]+)*',
  },
}
