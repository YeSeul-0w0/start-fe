console.log('app.js');

// function log(str){
//     console.log(str)
// }

var log=function(str){
    console.log(str);
};

log('hello');


var image={
    width:100,
    height:100,
    name:'1.png',
};

var image1=[1,2,3,4,5,6,'a',{}];
image[0]='a';

console.log(image, image1);

var data=null;
var data1='';
var data2;

console.log(data,data1,data2);

var count=1;
var number='2';
console.log(count+number);

console.log(''=='0');
console.log(0==='',0=='')
var isHero=true;

if(isHero){
    console.log('hero');
}


console.log(typeof 1);
console.log(typeof []);
console.log(typeof '1');
console.log(typeof {});