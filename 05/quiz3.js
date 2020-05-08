const red = document.querySelector('.add-red');
const box = document.querySelector('.box');
const boxes = new Array();
const boxesIndex = 0;
let count = 0;

// 문제 2
const addBtn = document.querySelector('.add-btn');

function addBox() {
  boxes.push(document.createElement('div'));
  boxes[boxesIndex].setAttribute('class', 'box');
  document.querySelector('#boxMold').appendChild(boxes[boxesIndex]);
  boxesIndex++;
}
addBtn.addEventListener('click', addBox);

// 문제 1
red.addEventListener('click', function () {
  if (boxes.length >= 0 && boxesIndex > 0) {
    boxes[--boxesIndex].classList.add('red');
  } else {
    box.classList.add('red');
  }
  // add : red라는 class를 추가
  // toggle : red라는 클래스가 없으면 추가, 있으면 제거
});

// 문제 3
const deleteBtn = document.querySelector('.delete-btn');

function deleteBox() {
  if (boxesIndex > 0) {
    let deleteBox = document.querySelector('#boxMold');
    deleteBox.removeChild(boxes[--boxesIndex]);
  }
  if (document.querySelector('.box') != null) {
    let deleteBox = document.querySelector('#boxMold');
    deleteBox.removeChild(box);
  }
}

deleteBtn.addEventListener('click', deleteBox);

// 문제 4
const textBtn = document.querySelector('.text-btn');

function insertText() {
  const inputText = document.querySelector('.txt').value;
  box.innerHTML = inputText;
}

textBtn.addEventListener('click', insertText);

// 문제 7
const imgBtn = document.querySelector('.image-btn');

function newBoxImg() {
  const newB = document.createElement('div');
  newB.setAttribute('class', 'box');
  document.querySelector('#boxMold').appendChild(newB);
  const img = document.createElement('img');
  img.setAttribute('src', 'https://i.imgur.com/69NjYBH.png');
  newB.appendChild(img);
}

function insertImg() {
  const img = document.createElement('img');
  img.setAttribute('src', 'https://i.imgur.com/69NjYBH.png');
  box.appendChild(img);
}

function checkBox() {
  if (document.querySelector('.box') == 1) {
    insertImg();
  } else {
    addBox();
    box = document.querySelector('.box');
    newBoxImg();
  }
}

imgBtn.addEventListener('click', checkBox);

// 문제 5
const resetBtn = document.querySelector('.reset-btn');
const mold = document.getElementById('boxMold');

function resetBox() {
  mold.removeChild(box);
  for (let i = 0; i < boxes.length; i++) {
    if (boxesIndex > 0) {
      mold.removeChild(boxes[--boxesIndex]);
    }
  }
}

resetBtn.addEventListener('click', resetBox);

// 문제 6
const toggleBtn = document.querySelector('.toggle-btn');
function toggleBox() {
  if (boxesIndex > 0) {
    const flag = boxesIndex - 1;
    boxes[flag].classList.toggle('hide');
  } else {
    box.classList.toggle('hide');
  }
}

toggleBtn.addEventListener('click', toggleBox);
