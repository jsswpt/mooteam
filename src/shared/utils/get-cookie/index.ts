export const getCookie = (key: string) => {
  const [, value] =
    document.cookie
      .split(';')
      .map((item) => item.split('='))
      .find((item) => item[0] === key) ?? []

  return value
}
