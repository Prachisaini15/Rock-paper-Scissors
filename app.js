let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock", "paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame=()=>{
    console.log("game is draw");
    msg.innerText="Game was draw, Play again.";
        msg.style.backgroundColor="rgb(15, 66, 50)";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you Win");
        msg.innerText="Yeah! You Win. ";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
       console.log("you lose");
       msg.innerText="Oops! you lose";
       msg.style.backgroundColor="red";}
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);

    const compChoice=genCompChoice();
    console.log("computer choice =",compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
