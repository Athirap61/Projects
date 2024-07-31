let userCount=0;
let compCount=0;

let choice=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");


let userPara=document.querySelector(".your");
let compPara=document.querySelector(".comp");
let btn=document.querySelector(".button");

const generateComp = ()=>{
    let choices = ["rock","paper","scissors"];
    let compChoice= Math.floor(Math.random() *3);
    return choices[compChoice];

};

const drawMatch =()=>{
    msg.innerText="The match is draw!";
    btn.style.backgroundColor="#433D8B";
    msg.style.color="white";
};

const showWinner=(userWin,userChoice,compC)=>{
    if(userWin){
        userCount++;
        userPara.innerText=userCount;
        msg.innerText="You win! Your " + userChoice + " beats " +compC
        btn.style.backgroundColor="#D895DA";
        msg.style.color="#0C1844";
    }
    else{
        compCount++;
        compPara.innerText=compCount;
        msg.innerText="You lose "+compC+ " beats your "+ userChoice;
        btn.style.backgroundColor="#C4E4FF";
        msg.style.color="#0C1844";
    }


}




const playGame =(userChoice)=>{
    const compC = generateComp();

    if (userChoice === compC){
        drawMatch();
    }
    else
    {
        let userWin=true;
        if(userChoice=="rock")
            userWin = compC ==="paper"? false:true;
        else if(userChoice=="paper")
            userWin = compC ==="scissors"?false:true;
        else
           userWin = compC === "rock"?false:true;

        showWinner(userWin,userChoice,compC);

    }

};

choice.forEach((chc)=>{
    chc.addEventListener("click",()=>{
        const userChoice=chc.getAttribute("id");
        playGame(userChoice);
    });
});
