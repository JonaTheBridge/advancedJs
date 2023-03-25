// const myArray = [1, 2, 3, 4];

// const response = myArray.at(2);
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // 3

// const response = myArray.pop();
// console.log('myArray', myArray);
// // [1, 2, 3]
// console.log('response', response);
// // 4

// const response = myArray.push(5);
// console.log('myArray', myArray);
// // [1, 2, 3, 4, 5]
// console.log('response', response);
// // 5 === es el length

// const response = myArray.fill(6);
// console.log('myArray', myArray);
// // [6, 6, 6, 6]
// console.log('response', response);
// // [6, 6, 6, 6]

// const response = myArray.join('');
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // '1234'

// const response = myArray.shift();
// console.log('myArray', myArray);
// // [2, 3, 4]
// console.log('response', response);
// // 1

// const response = myArray.unshift(0);
// console.log('myArray', myArray);
// // [0, 1, 2, 3, 4]
// console.log('response', response);
// // 5

// const response = myArray.reverse();
// console.log('myArray', myArray);
// // [4, 3, 2, 1]
// console.log('response', response);
// // [4, 3, 2, 1]

// const response = myArray.includes(3);
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // true


// With callback


// const response = myArray.map(function(item) {
//   return item * 2;
// });
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // [2, 4, 6, 8]

// const response = myArray.find(function(item) {
//   return item % 2 === 0;
// });
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // 2

// const response = myArray.filter(function(item) {
//   return item % 2 === 0;
// });
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // [2, 4]

// const response = myArray.every(function(item) {
//   return item > 0;
// });
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // true

// const response = myArray.findIndex(function(item) {
//   return item % 2 === 0;
// });
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // 1

// const initialItem = 5;
// const response = myArray.reduce(function(lastReturnedItem, item) {
//   return lastReturnedItem + item;
// // });
// }, initialItem);
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // 10
// // 15

const people = [
  { name: 'Jona', weight: 100 },
  { name: 'Ana', weight: 60 },
  { name: 'Pepe', weight: 40 },
];

const sortedPeople = people.sort(function (p1, p2) {
  if (p1.weight > p2.weight) { // sort people from min to max
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedPeople);
