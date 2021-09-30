var name1 = prompt("Enter Player 1 Name", "Player 1");
var name2 = prompt("Enter Player 2 Name", "Player 2");

if(name1.length !== 0)
document.getElementsByTagName("p")[0].innerHTML = name1;
else name1 = "Player 1"
if(name2.length !== 0)
document.getElementsByTagName("p")[1].innerHTML = name2;
else name2 = "Player 2"

document.querySelector(".btn").addEventListener("click", function(){
    start();
});

document.addEventListener("keypress", function(event){
    if(event.code === "Space" || event.code === "Enter"){
        start();
    }
})


function start(){
    let randomNumber1 = 1 + Math.floor(Math.random()*6);
    let randomNumber2 = 1 + Math.floor(Math.random()*6);

    let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// document.querySelector(".img1").src = randomDiceImage1;
// document.querySelector(".img2").src = randomDiceImage2;

    document.querySelector(".btn").classList.add("pressed");
    setTimeout(() => {
        document.querySelector(".btn").classList.remove("pressed");
    }, 100);
    var sound = new Audio("dice.mp3");
    sound.play();
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
    
    
    if(randomNumber1 > randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML = "⛳" + name1 + " Wins!";
    }else if(randomNumber1 < randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML = name2 + " Wins!⛳";
    }else{
        document.getElementsByTagName("h1")[0].innerHTML = "It's A Draw!  🧤";
    }
}