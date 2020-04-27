const $boxes=document.querySelectorAll('.box');
let currentX=null;
let currentY=null;
let isDown=false;

function currentPosition(event){
    isDown=true;
    box=this;
    currentX=event.clientX;
    currentY=event.clientY;

    window.addEventListener('mousemove', mouseMove);
}

function mouseMove(event){
    if(!isDown) return;
    var moveX = event.clientX - currentX;
    var moveY = event.clientY - currentY;
    box.style.top = box.offsetTop + moveY + "px";
    box.style.left = box.offsetLeft + moveX + "px";
    currentX = event.clientX;
    currentY = event.clientY;

}

function mouseUp(){
    window.removeEventListener('mousemove', mouseMove);
    isDown=false;
}

for (var i=0; i<$boxes.length; i++){
    $boxes[i].addEventListener('mousedown', currentPosition);
    $boxes[i].addEventListener('mouseup', mouseUp);
}
