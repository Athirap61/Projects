let boxes = document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Resetbtn");
let restartBtn=document.querySelector("#Restartbtn");
let container=document.querySelector(".paracontainer");
let msg = document.querySelector(".msg");

let turnO = true;
let count =0;

const winningpattern =[[0,1,2],[0,3,6], [0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];


const resetGame=()=>{
    turn0=true;
    count=0;
    enablebtn();
    container.classList.add("hide");
};


//adding eventlistener to all the boxes
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turnO==true){
            //player O
            box.innerText="O";
            turnO=false;
        }
        else{
            //player X
            box.innerText="X";
            turnO=true;
        }
        //to restrict changes after one button is clicked
        box.disabled=true;
        count++;

        let isWinner =checkWinner();

        if (count ===9 && ! isWinner){
            gameDraw();

        }
            

        })
       
    });

const gameDraw =()=>{
    msg.innerText="The game is draw";
    disablebtn();
    container.classList.remove("hide");
}


const disablebtn=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText='Congrats the Winner is '+ winner;
    container.classList.remove("hide");
    disablebtn;
}




const checkWinner=()=>{
    for(let pattern of winningpattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1 !="" && val2 !="" && val3 !="") {
            if(val1==val2 && val2==val3){
                console.log("Winner");
                showWinner(val1);
            }
            
        }
    };

};

resetBtn.addEventListener("click",resetGame);
restartBtn.addEventListener("click",resetGame);