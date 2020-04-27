function gogodan(){
    const $inputValue = document.getElementById("num").value;
    var str='';
    const $output=document.getElementById("result");
    for(var i=1;i<10;i++){
       str += $inputValue+" X "+i+" = "+$inputValue*i+'<br>';
    }
    $output.innerHTML=str;   
}

function inNumber(){
    if(event.keyCode<48 || event.keyCode>57){
        alert("숫자를 입력해주세요");
       event.returnValue=false;
    }
}

const $button=document.getElementById("btn");
$button.addEventListener('click',gogodan);

