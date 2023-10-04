const person = {
  firstName: 'Jake',
  lastName: 'McFarout',
  hobby: 'being cool',
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log('his name is ', fullName);
person.job = 'CIA';
console.log('his job is', person.job);
person['previousJob'] = 'FBI';
console.log('his last job was', person['previousJob']);
console.log(person);
