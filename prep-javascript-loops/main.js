// create your loops here.
function whileLoop1() {
  const array = [];
  let i = 0;
  while (i <= 9) {
    array.push(i);
    i++;
  }
  return array;
}

console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const array = [];
  let i = 0;
  while (i <= 18) {
    array.push(i);
    i++;
    i++;
  }
  return array;
}

console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    array.push(i);
  }
  return array;
}

console.log('forLoop1 output', forLoop1());

function forLoop2() {
  const array = [];
  for (let i = 100; i >= 0; i--) {
    const message = 'Time till explosion ' + i + '!';
    array.push(message);
  }
  return array;
}

console.log('forLoop2 output', forLoop2());

function forInLoop1(object) {
  const array = [];
  for (const prop in object) {
    array.push(prop);
  }
  return array;
}
const object = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log('forInLoop1 output', forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const prop in object) {
    array.push(object[prop]);
  }
  return array;
}
const exampleObject = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log('forInLoop1 output', forInLoop2(exampleObject));
