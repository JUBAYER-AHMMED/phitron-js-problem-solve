var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const unique = numbers.filter((value, index) => numbers.indexOf(value) === index);

console.log(unique);
