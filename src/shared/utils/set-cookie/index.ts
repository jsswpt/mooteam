export const setCookie = (key: string, value: string | null) =>
  (document.cookie = `${key}=${value}`)
