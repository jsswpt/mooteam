export const createWrapper = (id: string) => {
  const wrapper = document.getElementById(id)

  if (wrapper) {
    return wrapper
  }

  const wrapperToCreate = document.createElement('div')
  wrapperToCreate.setAttribute('id', id)
  document.body.appendChild(wrapperToCreate)

  return wrapperToCreate
}
