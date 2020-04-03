console.log('app');

//create
var todos=['운동'];
var todo='게임';
todos.push(todo);
console.log(todos);

//Read
todos.forEach(function(todos){
    console.log(todo);
});

//Update
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

// var isMan=false;
// if(isMan){
//     console.log('1');
// }
// else if(isMan && isHerro){

// }
// else{
//     console.log('2');
// }

// window.alert('1');
// var who=prompt("당신은 누구세요?");
// console.log(who);

// var isDelect=confirm('정말 삭제하시겠습니까?');
// console.log(isDelect);

// (function(){
//     var a='a'
//     console.log(a);
// })();

function sum(x,y){
    if(!y) y=1;
    console.log(x+y);
}
console.log(sum(3));
console.log(sum(3,3));

