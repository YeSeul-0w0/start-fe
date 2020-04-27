function randomN(){
    return Math.floor(Math.random() * 380) + 1
}

let randomX = randomN();
let randomY = randomN();
const $area=document.querySelector('.box');
let pointText=document.getElementById('point');
let pointCount=0;
let flage=false;
let $bugs=document.createElement('div');
$bugs.setAttribute("id","bug");
$bugs.style.left=randomX+"px";
$bugs.style.top=randomY+"px";
$area.appendChild($bugs);

$bugs.addEventListener('mouseup',(event)=>{
    randomX=randomN();
    randomY=randomN();
    $bugs.style.left=randomX+"px";
    $bugs.style.top=randomY+"px";   
    $bugs.style.visibility="visible";
});

$bugs.addEventListener('click',(event)=>{
    pointText.innerText=pointCount+1;
    $bugs.style.visibility="hidden";
    // flage=true;
});





