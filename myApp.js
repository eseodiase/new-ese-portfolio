import header from "./components/header.js";
import home from "./components/home.js";

const myApp=()=>{
    document.querySelector(".header").innerHTML = ( header() );
    document.querySelector(".main").innerHTML = ( home() );
    
    //darkmode toggle :
   const dkm = document.querySelector(".darkmodeBtn");
   dkm.addEventListener("click", ()=>{
       const circle = document.querySelector (".circle");
       const bd = document.body;
       dkm.classList.toggle ("brightMode");
       circle.classList.toggle("toggleCirle");
       bd.classList.toggle("bodyColorChange");
   });
   
 //view more article on mobile version:   
 const subContent1a = document.querySelector(".subContent1a");
 const content2 = document.querySelector(".content2");
 const box3 = document.querySelector(".box3");
 
 const more = document.querySelector(".more");
 more.addEventListener("click", ()=>{
 const hiddenArticle = document.querySelector(".hidden");
 subContent1a.style.marginTop="175px";
 hiddenArticle.style.display="block";
 more.style.display="none";
 content2.style.display="none";
 box3.style.display="block";
 });
 
  //view less article on mobile version:   
 const less = document.querySelector(".less");
 less.addEventListener("click", ()=>{
 const hiddenArticle = document.querySelector(".hidden");
 subContent1a.style.marginTop="0";
 hiddenArticle.style.display="none";
 more.style.display="inline-block";
 content2.style.display="block";
 box3.style.display="none";
 });
 
};
export default myApp; 