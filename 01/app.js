console.log('app.js');

// function log(str){
//     console.log(str)
// }

const log = function (str) {
  console.log(str);
};

log('hello');

const image = {
  width: 100,
  height: 100,
  name: '1.png',
};

const image1 = [1, 2, 3, 4, 5, 6, 'a', {}];
image[0] = 'a';

console.log(image, image1);

const data = null;
const data1 = '';
let data2;

console.log(data, data1, data2);

const count = 1;
const number = '2';
console.log(count + number);

console.log('' === '0');
console.log(0 === '', 0 == '');
const isHero = true;

if (isHero) {
  console.log('hero');
}

console.log(typeof 1);
console.log(typeof []);
console.log(typeof '1');
console.log(typeof {});
