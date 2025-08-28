let userScore=0;
let comScore=0;

let user=document.querySelector("#user");
let com=document.querySelector("#com");
let msg=document.querySelector(".msg");

const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genComChoice= () => {
    const options=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame= (userChoice) => {
    console.log("user choice=",userChoice);
    const comChoice=genComChoice();
    console.log("computer choice=",comChoice);

    if(userChoice===comChoice) {
        draw();
    } else {
        userWin=true;
        if(userChoice=="rock") {
            //comChoice is either paper or scissor
            userWin=comChoice==="paper"?false:true;
        }
        else if(userChoice=="paper") {
            //comChoice is either scissor or rock
            userWin=comChoice==="scissors"?false:true;
        }
        else {
            //comChoice is either rock or paper
            userWin=comChoice=="rock"?false:true;
        }
        showWinner(userWin);
    }
};

const draw=()=>{
    console.log("Game was draw");
    msg.innerText="Game was a draw";
    msg.classList.remove("msg","won","lost","draw");
    msg.classList.add("draw");
};

const showWinner=()=> {
    msg.classList.remove("msg","won","lost","draw");
    if(userWin) {
        console.log("you won");
        msg.innerText="You Won";
        userScore++;
        msg.classList.add("won");
    }
    else {
        console.log("you lost");
        msg.innerText="You Lost";
        comScore++;
        msg.classList.add("lost");
    }
    console.log(`score-> user score = ${userScore}  computer score = ${comScore}`);
    user.innerText=userScore;
    com.innerText=comScore;
};