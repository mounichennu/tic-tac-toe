let boxes=document.querySelectorAll(".box");
let set=document.querySelector("#reset");
let win = document.querySelector("#winn");
let msg=document.querySelector(".win");
const winPatterns = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
];
let oturn=true;
let count=0;
boxes.forEach(box=>{
    box.addEventListener("click",()=>{
if(oturn){
    box.innerText="O";
    oturn=false;
}
else{
    box.innerText="X";
    oturn=true;
}
box.disabled=true;
count++;
let winner=winnerCk();
if(count==9 && !winner){
    gameDraw();
}
    });
});
const winnerCk=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !=""&&pos2!=""&&pos3!=""){
            if((pos1===pos2)&&(pos2===pos3)){
                boxes.forEach(box=>{
                    box.disabled=true;
                });
                showWinner(pos1);
                return true;
            }
        }
    }
    return false;
};
function showWinner(pos){
    win.innerText=`Congratulations winner is ${pos}`;
    msg.classList.remove("msg");


}
function gameDraw(){
    win.innerText=`match is draw`;
msg.classList.remove("msg");
}
set.addEventListener("click",()=>{
    boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
    });
    count=0;
    oturn=true;
    msg.classList.add("msg");
});