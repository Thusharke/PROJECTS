var option = document.querySelectorAll(".option");
var stripe = document.querySelector(".stripe");
var h1 = document.querySelector("h1");
var userScoreDisplay = document.querySelector("#yourScore"), us=0;
var CPUscoreDisplay = document.querySelector("#CPUscore"),   cs=0;
var CPUchoice, result, UserChoice;
var gameOver = false;
//To compute what the user has selected!!
for(var i=0;i<option.length;i++){
    option[i].addEventListener("click",function(){
        UserChoice = this.className.split(" ")[1];
        randomSelect();
        changeToPurple(CPUchoice);
        result = checkWhoWon(UserChoice,CPUchoice);
        displayResult(result);
    })
}

//Triggers when the reset button is clicked
reset.addEventListener("click",function(){
    h1.style.backgroundColor = "black";
    userScoreDisplay.textContent = 0;us=0;
    CPUscoreDisplay.textContent = 0;cs=0;
    h1.textContent = "Let's play Rock Paper Scissors!";
    gameOver = false;
})

//===========functions That will be used==============

//function to toggle colors 
function changeToPurple(target){
    document.querySelector(target).style.backgroundColor = "purple";
    setTimeout(function(){
        document.querySelector(target).style.backgroundColor = "white";
    },1000);
}
//To compute what has CPU chosen
function randomSelect(){
    var choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1){
        CPUchoice = ".rock";
    }else if(choice == 2){
        CPUchoice = ".paper";
    }else if(choice == 3){
        CPUchoice = ".scissors";
    }else{
        alert("something went wrong!");
    }
}
//To Compute the results
function checkWhoWon(uc,cc){
    if(uc == "rock" && cc == ".paper"){
        return "lose";
    }else if(uc == "rock" && cc == ".scissors"){
        return "win";
    }else if(uc == "paper" && cc == ".scissors"){
        return "lose";
    }else if(uc == "paper" && cc == ".rock"){
        return "win";
    }else if(uc == "scissors" && cc == ".paper"){
        return "win";
    }else if(uc == "scissors" && cc == ".rock"){
        return "lose";
    }else{
        return "tie";
    }
}
//To change the animation based on win or lose
function displayResult(result){
    if(!gameOver){
        if(result == "lose"){  
            cs++;
        }else if(result == "win"){
            us++;
        }
        userScoreDisplay.textContent = us;
        CPUscoreDisplay.textContent = cs;
    }

    //Triggers when one wins the match
    if(us == 5 && cs == 5){
        resultDisplay.textContent = "It's a tie";
        h1.style.backgroundColor = "steelblue";
        gameOver = true;
    }
    else if(cs == 5){  
        h1.textContent = "You Lost!!";
        h1.style.backgroundColor = "red";
        gameOver = true;
    }else if(us == 5){
        h1.textContent = "You Win!!";
        h1.style.backgroundColor = "green";
        gameOver = true;
    }
}
