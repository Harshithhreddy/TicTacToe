let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let newGame=document.querySelector("#msgbtn");
let resetBtn=document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-contents");
let turnX=true;

let count=0;

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click" ,() => {
        // console.log("button is clicked");
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner(box);

        if(count==9 && !isWinner){
            gamedraw();
        }
    })
})

const checkWinner = () => {
    for(let pos of winPatterns){
        let pos1=boxes[pos[0]].innerText;
        let pos2=boxes[pos[1]].innerText;
        let pos3=boxes[pos[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if( pos1===pos2 && pos2=== pos3){
                  showWinner(pos1);
                  return true;  
            }
        }
    }
    // return false;
};


const gamedraw = () =>{
    msg.innerText=`Game is DRAWN!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showWinner = (pos1) => {
    msg.innerHTML=`CONGRATULATIONS,Winner is ${pos1}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes =() =>{
    for(let box of boxes)
    box.disabled=true;
}

const restartGame =() =>{
    turnX=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";  
    }
}


newGame.addEventListener("click" , restartGame);
resetBtn.addEventListener("click" , restartGame);