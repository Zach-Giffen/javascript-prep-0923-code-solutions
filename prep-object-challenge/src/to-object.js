/* exported toObject */
function toObject(keyValuePair) {
  const object = {};
  if (Array.isArray(keyValuePair) && keyValuePair.length === 2) {
    object[keyValuePair[0]] = keyValuePair[1];
  }
  return object;
}
