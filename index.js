var dice1 = Math.floor(Math.random()*6 + 1);
var selectimg = "images/dice"+dice1+".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src",selectimg);;



var dice2 = Math.floor(Math.random()*6 + 1);
var selectimg2 = "images/dice"+dice2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",selectimg2);;


if(dice1>dice2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(dice1<dice2){
    document.querySelector("h1").innerHTML="PLayer 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}