var rand1=Math.floor(Math.random()*6+1);
var rand2=Math.floor(Math.random()*6+1);
var img1=("images/dice"+rand1+".png");
var img2=("images/dice"+rand2+".png");
var who_win;
if(rand1>rand2) who_win="Player 1 win"
else if(rand2>rand1) who_win="Player 2 win"
else who_win="Refresh again.";
document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);
document .querySelector(".container h1").innerHTML=who_win;
