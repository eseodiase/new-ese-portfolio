const myApp=()=>{
    document.querySelector(".header").innerHTML = (header() );
    
    //darkmode toggle :
   const dkm = document.querySelector(".darkmodeBtn");
   
   
   dkm.addEventListener("click", ()=>{
       const round = document.querySelector (".roundToggle");
       const name = document.querySelector (".myName");
       const bd = document.body;
       dkm.classList.toggle ("anotherStyle");
       round.classList.toggle("moveRound");
       name.classList.toggle ("whiteTxt");
       bd.classList.toggle("bodyColorChange");
   });
               
};
export default myApp;
