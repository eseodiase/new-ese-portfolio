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

const app=()=>{
    document.querySelector(".header").innerHTML = ( header() );
    document.querySelector(".nav").innerHTML = ( nav() );
    document.querySelector(".main").innerHTML = ( ads() + notice() + subNav() + icons() + icons_1() + ads() + toTop() );

 
    // goto palletPage 
 const pal = document.querySelector(".pal").onclick = function (){
     document.querySelector(".main").innerHTML = ( ads() + pallet() + ads() + gradient() + toTop() );
 }
 
 // goto iconPage 
 const icon = document.querySelector(".icon").onclick = function (){
     document.querySelector(".main").innerHTML = ( ads() + notice() + subNav() + icons() + icons_1() + ads() + toTop() );
 }
 
 // goto shapePage → edit later
 const shape = document.querySelectorAll(".shape")
 for(var i = 0; i < shape.length; i++){
 shape[i].onclick = function (){
     document.querySelector(".main").innerHTML = ( ads() + notice() + subNav() + shapes() + ads() + toTop() );
     shape[i].style.backgroundColor="#050d2c";
 }
}
 
  // goto signPage 
 const sign = document.querySelector(".sign").onclick = function (){
     document.querySelector(".main").innerHTML = ( ads() + notice() + subNav() + signs() + ads() + toTop() );
 }
 
   // goto currencyPage 
 const currency = document.querySelector(".currency").onclick = function (){
     document.querySelector(".main").innerHTML = ( ads() + notice() + subNav() + currencies() + ads() + toTop() );
 }
 
    // goto emojiPage 
 const emoji = document.querySelector(".emoji").onclick = function (){
     document.querySelector(".main").innerHTML = ( ads() + notice() + subNav() + emojis() + ads() + toTop() );
 }


  // goto alphabetPage 
 const alpa = document.querySelector(".alpa").onclick = function (){
     document.querySelector(".main").innerHTML = ( ads() + notice()  + subNav() + alphabets() + ads() + toTop() );
 }
 
   // goto numberPage 
 const num = document.querySelector(".num").onclick = function (){
     document.querySelector(".main").innerHTML = ( ads() + notice() + subNav() + numbers() + ads() + toTop() );
 }
 
    // goto otherPage 
 const oth = document.querySelector(".others").onclick = function (){
     document.querySelector(".main").innerHTML = ( ads() + notice() + subNav() + others() + ads() + toTop() );
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
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}
 
}
export default app;
