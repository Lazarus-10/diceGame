document.querySelector(".btn").addEventListener("click", function(){
    let randomNumber1 = 1 + Math.floor(Math.random()*6);
    let randomNumber2 = 1 + Math.floor(Math.random()*6);

    let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// document.querySelector(".img1").src = randomDiceImage1;
// document.querySelector(".img2").src = randomDiceImage2;


    var sound = new Audio("dice.mp3");
    sound.play();
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
    
    
    if(randomNumber1 > randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML = "⛳Player 1 Wins!";
    }else if(randomNumber1 < randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!⛳";
    }else{
        document.getElementsByTagName("h1")[0].innerHTML = "It's A Draw!  🧤";
    }
});
