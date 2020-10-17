export const updatedObject = (objectState , objectValues) => {
  return {
    ...objectState,
    ...objectValues
  }
}