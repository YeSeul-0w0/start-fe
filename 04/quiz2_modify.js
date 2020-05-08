let $select = null;

function printBoards() {
  const $board = document.getElementById('board');
  const boardCount = 16;
  let isWhite = false;
  let className = '';
  const boardLineCount = 4;
  let str = '';
  for (let i = 0; i < boardCount; i++) {
    className = isWhite ? 'black' : 'white';
    str += `<span class="${className}"></span>`;
    isWhite = !isWhite;
    if (i % boardLineCount === boardLineCount - 1) {
      isWhite = !isWhite;
    }
  }
  $board.innerHTML = str;
}

function select(event) {
  if ($select) {
    $select.className = $select.className.replace('select', '');
  }
  const el = event.currentTarget;
  el.className += ' select';
  $select = el;
} // event 안에 들어가는 함수에는 파라미터로 event 작성해야함

function addEvent() {
  const $boards = document.querySelectorAll('span');
  const boardLength = $boards.length;
  for (let j = 0; j < boardLength; j++) {
    $boards[j].addEventListener('click', select);
  }
}

printBoards();
addEvent();
