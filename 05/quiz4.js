var mx, my;
var on=0;

function move_onoff(e,chk){
    var box=document.getElementById("box");
    mx=e.clientX-box.offsetLeft;
    my=e.clientY-box.offsetTop;
    on=chk;
}
function move(e){
    if(on==0){
        return;
    }    var box=document.getElementById("box");
    var x=e.clientX-mx;
    var y=e.clientY-my;
    if(x>0){
        box.style.left=x+"px";
    }
    if(y>0){
        box.style.top=y+"px";
    }
}