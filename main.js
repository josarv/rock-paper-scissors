let userScore = 0;
let aiScore = 0;
const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getaiChoice() {
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * 3)];
};

function game(userChoice) {
    const aiChoice = getaiChoice();
    let link;
    let result;
    const userChoice_div = document.getElementById(userChoice);
    switch(userChoice+aiChoice)
    {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            userScore++;
            link = " beats ";
            result = ". You win!";
            userChoice_div.classList.add('green-glow');
            setTimeout(() => userChoice_div.classList.remove('green-glow'), 250);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            aiScore++;
            link = " loses to ";
            result = ". You lose.";
            userChoice_div.classList.add('red-glow');
            setTimeout(() => userChoice_div.classList.remove('red-glow'), 250);
            break;
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            userScore++;
            aiScore++;
            link = " equals ";
            result = ". It's a draw.";
            userChoice_div.classList.add('grey-glow');
            setTimeout(() => userChoice_div.classList.remove('grey-glow'), 250);
            break;
    }
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = userChoice.charAt(0).toUpperCase() + userChoice.slice(1) + "usr".fontsize(3).sub() + link + aiChoice.charAt(0).toUpperCase() + aiChoice.slice(1) + "ai".fontsize(3).sub() + result;
};

rock_div.addEventListener('click', () => game("rock"));
paper_div.addEventListener('click', () => game("paper"));
scissors_div.addEventListener('click', () => game("scissors"));