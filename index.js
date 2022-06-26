
            // FOR PLAYER 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSrc1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc1);


                  // FOR PLAYER 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSrc2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSrc2);


if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "<em> Draw, try again</em>"
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "<em> Player 1 wins</em>"
}
else {
  document.querySelector("h1").innerHTML = "<em> Player 2 wins</em>"
}
