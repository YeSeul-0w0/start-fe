function randomN() {
  return Math.floor(Math.random() * 380) + 1;
}

const time = setInterval(timeCheck, 1000);
let randomX = randomN();
let randomY = randomN();
const $area = document.querySelector('.box');
let $pointText = document.getElementById('point');
let pointCount = 0;
let flag = false;
let $bugs = document.createElement('div');
$bugs.setAttribute('id', 'bug');
$bugs.style.left = randomX + 'px';
$bugs.style.top = randomY + 'px';
$area.appendChild($bugs);

let $life = document.getElementById('life');
let lifePoint = 10;
$life.innerHTML = lifePoint;
$pointText.innerHTML = pointCount;
let timeFlag = false;

function timeCheck() {
  if (!timeFlag && lifePoint > -2) {
    $life.innerText = lifePoint--;
    console.log(lifePoint);
  }
  if (lifePoint == -2) {
    alert('Game Over!');
  }
}
$bugs.addEventListener('mousedown', (event) => {
  if (pointCount == 0) {
    pointCount = 1;
  }
  $pointText.innerText = pointCount++;
  $bugs.style.visibility = 'hidden';
  flag = true;
  timeFlag = true;
  checkVisible(flag);
});

$bugs.addEventListener('mouseup', (event) => {
  randomX = randomN();
  randomY = randomN();
  $bugs.style.left = randomX + 'px';
  $bugs.style.top = randomY + 'px';
  //debugger;
  $bugs.style.visibility = 'visible';
  timeFlag = false;
});

function checkVisible(flag) {
  if (flag) {
    $bugs.style.visibility = 'visible';
    flag = false;
  }
}

console.log(timeFlag);
