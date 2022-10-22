import header from "./components/header.js";
import nav from "./components/nav.js";
import ads from "./components/ads.js";
import notice from "./components/notice.js";
import subNav from "./components/categories/subNav.js";
import icons from "./components/iconList/icons.js";
import icons_1 from "./components/iconList/icons_1.js";
import shapes from "./components/iconList/shapes.js";
import signs from "./components/iconList/signs.js";
import currencies from "./components/iconList/currencies.js";
import emojis from "./components/iconList/emojis.js";
import alphabets from "./components/iconList/alphabets.js";
import numbers from "./components/iconList/numbers.js";
import others from "./components/iconList/others.js";
import toTop from "./components/toTop.js";

//nxt page
import pallet from "./components/pallet.js";
import gradient from "./components/pallet_gradient.js";

//dice
import diceApp from "./components/dice_game/dice.js";


const app=()=>{
    document.querySelector(".header").innerHTML = ( header() );
    document.querySelector(".nav").innerHTML = ( nav() );
    document.querySelector(".main").innerHTML = ( ads() + notice() + subNav() + icons() + ads() + icons_1() + ads() + toTop() );
    

//pages listed
const pal = document.querySelector(".pal");
const icon = document.querySelector(".icon");
const shape = document.querySelector(".shape");
const sign = document.querySelector(".sign");
const currency = document.querySelector(".currency");
const emoji = document.querySelector(".emoji");
const alpa = document.querySelector(".alpa");
const num = document.querySelector(".num");
const oth = document.querySelector(".others");

 
    // goto palletPage 
 pal.onclick = function (){
     document.querySelector(".main").innerHTML = ( pallet() + ads() + gradient() + toTop() );
     pal.style.backgroundColor="#050d2c";
     //no backgroundColor ↓
     icon.style.backgroundColor="indigo";
     shape.style.backgroundColor="indigo";
     sign.style.backgroundColor="indigo";
     currency.style.backgroundColor="indigo";
     emoji.style.backgroundColor="indigo";
     alpa.style.backgroundColor="indigo";
     num.style.backgroundColor="indigo";
     oth.style.backgroundColor="indigo";
 }
 
 // goto iconPage 
 icon.onclick = function (){
     document.querySelector(".main").innerHTML = ( ads() + notice() + subNav() + icons() + ads() + icons_1() + ads() + toTop() );
     icon.style.backgroundColor="#050d2c";
     //no backgroundColor ↓
     pal.style.backgroundColor="indigo";
     shape.style.backgroundColor="indigo";
     sign.style.backgroundColor="indigo";
     currency.style.backgroundColor="indigo";
     emoji.style.backgroundColor="indigo";
     alpa.style.backgroundColor="indigo";
     num.style.backgroundColor="indigo";
     oth.style.backgroundColor="indigo";
 }
 
 // goto shapePage → edit later
 
 shape.onclick = function (){
     document.querySelector(".main").innerHTML = ( notice() + subNav() + shapes() + ads() + toTop() );
     shape.style.backgroundColor="#050d2c";
     //no backgroundColor ↓
     pal.style.backgroundColor="indigo";
     icon.style.backgroundColor="indigo";
     sign.style.backgroundColor="indigo";
     currency.style.backgroundColor="indigo";
     emoji.style.backgroundColor="indigo";
     alpa.style.backgroundColor="indigo";
     num.style.backgroundColor="indigo";
     oth.style.backgroundColor="indigo";

}
 
  // goto signPage 
 sign.onclick = function (){
     document.querySelector(".main").innerHTML = ( notice() + subNav() + signs() + ads() + toTop() );
     sign.style.backgroundColor="#050d2c";
     //no backgroundColor ↓
     icon.style.backgroundColor="indigo";
     shape.style.backgroundColor="indigo";
     pal.style.backgroundColor="indigo";
     currency.style.backgroundColor="indigo";
     emoji.style.backgroundColor="indigo";
     alpa.style.backgroundColor="indigo";
     num.style.backgroundColor="indigo";
     oth.style.backgroundColor="indigo";
 }
 
   // goto currencyPage 
 currency.onclick = function (){
     document.querySelector(".main").innerHTML = ( notice() + subNav() + currencies() + ads() + toTop() );
     currency.style.backgroundColor="#050d2c";
     //no backgroundColor ↓
     icon.style.backgroundColor="indigo";
     shape.style.backgroundColor="indigo";
     sign.style.backgroundColor="indigo";
     pal.style.backgroundColor="indigo";
     emoji.style.backgroundColor="indigo";
     alpa.style.backgroundColor="indigo";
     num.style.backgroundColor="indigo";
     oth.style.backgroundColor="indigo";
 }
 
    // goto emojiPage 
 emoji.onclick = function (){
     document.querySelector(".main").innerHTML = ( notice() + subNav() + emojis() + ads() + toTop() );
     emoji.style.backgroundColor="#050d2c";
     //no backgroundColor ↓
     icon.style.backgroundColor="indigo";
     shape.style.backgroundColor="indigo";
     sign.style.backgroundColor="indigo";
     currency.style.backgroundColor="indigo";
     pal.style.backgroundColor="indigo";
     alpa.style.backgroundColor="indigo";
     num.style.backgroundColor="indigo";
     oth.style.backgroundColor="indigo";
 }


  // goto alphabetPage 
alpa.onclick = function (){
     document.querySelector(".main").innerHTML = ( notice()  + subNav() + alphabets() + ads() + toTop() );
     alpa.style.backgroundColor="#050d2c";
     //no backgroundColor ↓
     icon.style.backgroundColor="indigo";
     shape.style.backgroundColor="indigo";
     sign.style.backgroundColor="indigo";
     currency.style.backgroundColor="indigo";
     emoji.style.backgroundColor="indigo";
     pal.style.backgroundColor="indigo";
     num.style.backgroundColor="indigo";
     oth.style.backgroundColor="indigo";
 }
 
   // goto numberPage 
 num.onclick = function (){
     document.querySelector(".main").innerHTML = ( notice() + subNav() + numbers() + ads() + toTop() );
     num.style.backgroundColor="#050d2c";
     //no backgroundColor ↓
     icon.style.backgroundColor="indigo";
     shape.style.backgroundColor="indigo";
     sign.style.backgroundColor="indigo";
     currency.style.backgroundColor="indigo";
     emoji.style.backgroundColor="indigo";
     alpa.style.backgroundColor="indigo";
     pal.style.backgroundColor="indigo";
     oth.style.backgroundColor="indigo";
 }
 
    // goto otherPage 
 oth.onclick = function (){
     document.querySelector(".main").innerHTML = ( notice() + subNav() + others() + ads() + toTop() );
     oth.style.backgroundColor="#050d2c";
     //no backgroundColor ↓
     icon.style.backgroundColor="indigo";
     shape.style.backgroundColor="indigo";
     sign.style.backgroundColor="indigo";
     currency.style.backgroundColor="indigo";
     emoji.style.backgroundColor="indigo";
     alpa.style.backgroundColor="indigo";
     num.style.backgroundColor="indigo";
     pal.style.backgroundColor="indigo";
 }
 
 
 //ads
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    dots[i].style.display="none"
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image 
}
 
     //dice_game
 const diceGame = document.querySelector(".fetchGame").onclick = function(){
     document.querySelector(".main").innerHTML = (diceApp() + ads());
 
 
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const rollDice = () => getRandomNumber(1, 6);

document.getElementById("roll").addEventListener("click", function () {
  // fetch player names from the input fields
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;



  // roll dice for both players
  const player1Score = rollDice();
  const player2Score = rollDice();

  // initialize empty string to store result
  let result = "";

  // determine the result
  if (player1Score > player2Score) {
    result = `${player1} won the round`;
  } else if (player2Score > player1Score) {
    result = `${player2} won the round`;
  } else {
    result = "This round is tied";
  }
  
  //my conditions for player1
  if(player1Score == 1){
      document.querySelector(".one").style.display ="block";
      //hide
      document.querySelector(".two").style.display ="none";
      document.querySelector(".three").style.display ="none";
      document.querySelector(".four").style.display ="none";
      document.querySelector(".five").style.display ="none";
      document.querySelector(".six").style.display ="none";
  }
  else if(player1Score == 2) {
      document.querySelector(".two").style.display ="block";
      //hide
      document.querySelector(".one").style.display ="none";
      document.querySelector(".three").style.display ="none";
      document.querySelector(".four").style.display ="none";
      document.querySelector(".five").style.display ="none";
      document.querySelector(".six").style.display ="none";
  }
  else if(player1Score == 3) {
      document.querySelector(".three").style.display ="block";
      //hide
      document.querySelector(".one").style.display ="none";
      document.querySelector(".two").style.display ="none";
      document.querySelector(".four").style.display ="none";
      document.querySelector(".five").style.display ="none";
      document.querySelector(".six").style.display ="none";
  }
  else if(player1Score == 4) {
      document.querySelector(".four").style.display ="block";
      //hide
      document.querySelector(".one").style.display ="none";
      document.querySelector(".two").style.display ="none";
      document.querySelector(".three").style.display ="none";
      document.querySelector(".five").style.display ="none";
      document.querySelector(".six").style.display ="none";
  }
  else if(player1Score == 5) {
      document.querySelector(".five").style.display ="block";
      //hide
      document.querySelector(".one").style.display ="none";
      document.querySelector(".two").style.display ="none";
      document.querySelector(".three").style.display ="none";
      document.querySelector(".four").style.display ="none";
      document.querySelector(".six").style.display ="none";
  }
  //sixth
  else if(player1Score == 6) {
      document.querySelector(".six").style.display ="block";
      //hide
      document.querySelector(".one").style.display ="none";
      document.querySelector(".two").style.display ="none";
      document.querySelector(".three").style.display ="none";
      document.querySelector(".four").style.display ="none";
     document.querySelector(".five").style.display ="none";
  }
  else{
      document.querySelector(".one").style.display ="none";
      document.querySelector(".two").style.display ="none";
      document.querySelector(".three").style.display ="none";
      document.querySelector(".four").style.display ="none";
      document.querySelector(".five").style.display ="none";
      document.querySelector(".six").style.display ="none";
  }
  
  //my conditions for player2
  if(player2Score == 1){
      document.querySelector(".o_ne").style.display ="block";
      //hide
      document.querySelector(".t_wo").style.display ="none";
      document.querySelector(".t_hree").style.display ="none";
      document.querySelector(".f_our").style.display ="none";
      document.querySelector(".f_ive").style.display ="none";
      document.querySelector(".s_ix").style.display ="none";
  }
  else if(player2Score == 2) {
      document.querySelector(".t_wo").style.display ="block";
      //hide
      document.querySelector(".o_ne").style.display ="none";
      document.querySelector(".t_hree").style.display ="none";
      document.querySelector(".f_our").style.display ="none";
      document.querySelector(".f_ive").style.display ="none";
      document.querySelector(".s_ix").style.display ="none";
  }
  else if(player2Score == 3) {
      document.querySelector(".t_hree").style.display ="block";
      //hide
      document.querySelector(".o_ne").style.display ="none";
      document.querySelector(".t_wo").style.display ="none";
      document.querySelector(".f_our").style.display ="none";
      document.querySelector(".f_ive").style.display ="none";
      document.querySelector(".s_ix").style.display ="none";
  }
  else if(player2Score == 4) {
      document.querySelector(".f_our").style.display ="block";
      //hide
      document.querySelector(".o_ne").style.display ="none";
      document.querySelector(".t_wo").style.display ="none";
      document.querySelector(".t_hree").style.display ="none";
      document.querySelector(".f_ive").style.display ="none";
      document.querySelector(".s_ix").style.display ="none";
  }
  else if(player2Score == 5) {
      document.querySelector(".f_ive").style.display ="block";
      //hide
      document.querySelector(".o_ne").style.display ="none";
      document.querySelector(".t_wo").style.display ="none";
      document.querySelector(".t_hree").style.display ="none";
      document.querySelector(".f_our").style.display ="none";
      document.querySelector(".s_ix").style.display ="none";
  }
  //sixth
  else if(player2Score == 6) {
      document.querySelector(".s_ix").style.display ="block";
      //hide
      document.querySelector(".o_ne").style.display ="none";
      document.querySelector(".t_wo").style.display ="none";
      document.querySelector(".t_hree").style.display ="none";
      document.querySelector(".f_our").style.display ="none";
     document.querySelector(".f_ive").style.display ="none";
  }
  else{
      document.querySelector(".o_ne").style.display ="none";
      document.querySelector(".t_wo").style.display ="none";
      document.querySelector(".t_hree").style.display ="none";
      document.querySelector(".f_our").style.display ="none";
      document.querySelector(".f_ive").style.display ="none";
      document.querySelector(".s_ix").style.display ="none";
  }
  
  
  //edited
  document.querySelector(".names").innerHTML =`
  <p>${player1}</p> 
  <p class="vs">VS</p> 
  <p>${player2}</p>
  `;
  
  // display the result on the page
  document.getElementById("results").innerHTML = `
  
  <p class="generatedNum">
  ${player1Score}
  </p>
  
  <p class="generatedNum">
  ${player2Score}
  </p>
  
  
  <br/>
  <p class="won">${result}</p> `;
});


// condition for required names
  const req = document.getElementById("roll").onclick = function(){
if(player1.value == ""){
      const g = document.querySelector(".game").style.display ="none";
      alert ("Oops, you need to enter 2 player names for this game.")
  }
  else if(player2.value == ""){
  const g = document.querySelector(".game").style.display ="none";
  alert ("Oops, you need to enter 2 player names for this game.")
  }
  else{
  const g = document.querySelector(".game").style.display ="block";
  }
  }


}
//
 
}
export default app;