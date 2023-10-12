/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== null &&
      array[i] !== false &&
      array[i] !== 0 &&
      array[i] !== '' &&
      array[i] !== undefined &&
      array[i]
    ) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
