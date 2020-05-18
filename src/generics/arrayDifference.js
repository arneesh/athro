export const arrayDifference = (array1, array2) => {
  const diffArr = new Set(array2);
  return array1.filter(arr => !diffArr.has(arr));
};
