const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2, [7, 8, 9], 'Tay');

// Concatenando com o spread/rest (nesse caso é spread, 'espalhar')
const arr3 = [...arr1, 'Taylan', ...arr2, ...[7, 8, 9] /*[7, 8, 9]*/]; // Se não usar spread no novo array adc ele manda um array literal
console.log(arr3);