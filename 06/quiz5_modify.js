const offset = { x: 0, y: 0 };
let isDown = false;
let dragDom = null;

function startDragDown(el) {
  el.addEventListener('mousedown', (event) => {
    isDown = true;
    dragDom = el;
    offset.x = el.offsetLeft - event.clientX;
    offset.y = el.offsetTop - event.clientY;
  });
}

function addEvent() {
  document.addEventListener('mouseup', () => {
    isDown = false;
  }); // 빨리 움직일 때 박스 영역 밖으로 마우스 커서가 나갈 수 있어서 문서 전체에 영향을 줌.

  document.addEventListener('mousemove', (event) => {
    if (!isDown) return;
    dragDom.style.left = `${event.clientX + offset.x}px`;
    dragDom.style.top = `${event.clientY + offset.y}px`;
  }); // 빨리 움직일 때 박스 영역 밖으로 마우스 커서가 나갈 수 있어서 문서 전체에 영향을 줌.
}

addEvent();
startDragDown(document.querySelector('.box'));
startDragDown(document.querySelector('.box1'));
