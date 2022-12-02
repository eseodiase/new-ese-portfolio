import header from "./components/header.js";
import nav from "./components/nav.js";
import home from "./components/home.js";
import about from "./components/about.js";
import skills from "./components/skills.js";
import resume from "./components/resume.js";
import contact from "./components/contact.js";
import {iframe0, iframe1, iframe2, iframe3, iframe4, iframe5, iframe6, iframe7, iframe8} from "./components/portfolio.js";

const myApp=()=>{
    document.querySelector(".header").innerHTML = ( header() );
    document.querySelector(".nav").innerHTML = ( nav() );
    document.querySelector(".main").innerHTML = ( home() );
    const bckTtop = document.querySelector(".backToTop").style.display="none";
    
    //darkmode toggle :
   const dkm = document.querySelector(".darkmodeBtn");
   dkm.addEventListener("click", ()=>{
       const circle = document.querySelector (".circle");
       const bd = document.body;
       dkm.classList.toggle ("brightMode");
       circle.classList.toggle("toggleCirle");
       
       const social = document.querySelectorAll(".social");
    for(var i = 0; i < social.length; i++){
        social[i].classList.toggle("socialChange")
    }
       
       bd.classList.toggle("bodyColorChange");
   });
   
 //view more article on mobile version:   
 const subContent1a = document.querySelector(".subContent1a");
 const content2 = document.querySelector(".content2");
 const box3 = document.querySelector(".box3");
 
 const more = document.querySelector(".more");
 more.addEventListener("click", ()=>{
 const hiddenArticle = document.querySelector(".hidden");
 hiddenArticle.style.display="block";
 more.style.display="none";
 content2.style.display="none";
 box3.style.display="block";
 });
 
  //view less article on mobile version:   
 const less = document.querySelector(".less");
 less.addEventListener("click", ()=>{
 const hiddenArticle = document.querySelector(".hidden");
 hiddenArticle.style.display="none";
 more.style.display="inline-block";
 content2.style.display="block";
 box3.style.display="none";
 });
 
  // goto aboutPage 
 const aboutPage = document.querySelector(".about").onclick = function (){
     document.querySelector(".main").innerHTML = ( about());
     const main = document.querySelector(".main").style.marginTop="80px";
     const bckTtop = document.querySelector(".backToTop").style.display="block";
}

  // goto skillsPage 
 const skillsPage = document.querySelector(".skills").onclick = function (){
     document.querySelector(".main").innerHTML = ( skills());
     const main = document.querySelector(".main").style.marginTop="80px";
     const bckTtop = document.querySelector(".backToTop").style.display="block";
}
 
   // goto resumePage 
 const resumePage = document.querySelector(".resume").onclick = function (){
     document.querySelector(".main").innerHTML = ( resume());
     const main = document.querySelector(".main").style.marginTop="80px";
     const bckTtop = document.querySelector(".backToTop").style.display="block";
}
 
 // goto projectPage 
 const project = document.querySelector(".project").onclick = function (){
     document.querySelector(".main").innerHTML = ( iframe0() + iframe1() + iframe2() + iframe3() + iframe4() + iframe5() + iframe6() + iframe7() + iframe8() );
     const main = document.querySelector(".main");
     main.style.marginTop="80px";
     main.style.marginBottom="30px";
     const bckTtop = document.querySelector(".backToTop").style.display="block";
}

 // goto contactPage 
 const connect = document.querySelector(".connect").onclick = function (){
     document.querySelector(".main").innerHTML = ( contact());
     const main = document.querySelector(".main").style.marginTop="80px";
     const bckTtop = document.querySelector(".backToTop").style.display="block";
}

 // back to homePage 
 const homePage = document.querySelector(".home").onclick = function (){
     document.querySelector(".main").innerHTML = ( home() );
     const bckTtop = document.querySelector(".backToTop").style.display="none";
     const main = document.querySelector(".main").style.marginTop="6px";
     
      //view more article on mobile version:   
 const subContent1a = document.querySelector(".subContent1a");
 const content2 = document.querySelector(".content2");
 const box3 = document.querySelector(".box3");
 
 const more = document.querySelector(".more");
 more.addEventListener("click", ()=>{
 const hiddenArticle = document.querySelector(".hidden");
 hiddenArticle.style.display="block";
 more.style.display="none";
 content2.style.display="none";
 box3.style.display="block";
 });
 
  //view less article on mobile version:   
 const less = document.querySelector(".less");
 less.addEventListener("click", ()=>{
 const hiddenArticle = document.querySelector(".hidden");
 hiddenArticle.style.display="none";
 more.style.display="inline-block";
 content2.style.display="block";
 box3.style.display="none";
 });
 }
 
};
export default myApp; 