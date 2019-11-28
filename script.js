let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


//alert("Anca e un pic bleaga!")

function getCompChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Piatra";
  if (letter === "p") return "Hartia";
  return "Foarfeca";
}

//getCompChoice();

function win(user, computer) {
  console.log("won!!!");
  userScore++;
  //console.log(userScore);
  userScore_span.innerHTML = userScore;
  //console.log(user);
  //console.log(computer);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(user)}${smallUserWord} bate ${convertToWord(computer)}${smallCompWord}.  Ai castigat!`;
  document.getElementById(user).classList.add("green-glow");
  setTimeout(function () { document.getElementById(user).classList.remove("green-glow") }, 300);
}

function lose(user, computer) {
  console.log("lost!!!");
  compScore++;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(computer)}${smallCompWord} bate ${convertToWord(user)}${smallUserWord}.  Ai pierdut!`;
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function () { document.getElementById(user).classList.remove("red-glow") }, 300);

}
function draw(user) {
  console.log("draw!!!");
  result_div.innerHTML = `Egalitate!!`;
  document.getElementById(user).classList.add('gray-glow')
  setTimeout(function () { document.getElementById(user).classList.remove("gray-glow") }, 300);
}

function game(userChoice) {
  const computerChoice = getCompChoice();
  console.log("Computer choice " + computerChoice);
  console.log("User choice: " + userChoice)

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      //console.log("User wins!");
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      //console.log("Computer wins!");
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      //console.log("Draw!");
      draw(userChoice);
      break;
  }
}

function main() {

  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();


