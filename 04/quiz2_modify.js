var $select=null;

function printBoards(){
    var $board = document.getElementById("board");
    var boardCount=16;
    var isWhite=false;
    var className=''
    var boardLineCount=4;
    var str='';
    for (var i=0; i<boardCount; i++){
        className = (isWhite)?'black':'white';
        str +='<span class="'+className+'"></span>';
        isWhite = !isWhite;
        if(i%boardLineCount===boardLineCount-1){
            isWhite=!isWhite;
        }
    }
    $board.innerHTML=str;
}

function select(event){
    if($select){
        $select.className =$select.className.replace('select','');
    }
    var el=event.currentTarget;
    el.className +=' select';
    $select=el;   
} // event 안에 들어가는 함수에는 파라미터로 event 작성해야함

function addEvent(){
    var $boards=document.querySelectorAll('span');
    var boardLength=$boards.length;
    for(var j=0; j<boardLength; j++){
        $boards[j].addEventListener('click',select)
    }
}

printBoards();
addEvent();