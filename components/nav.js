const nav = () => {
"use strict";
const allObjectsUsedOnHeader = {

//Navigation List
l1: "",
l2: "Home",
l3: "About",
l4: "Skills",
l5: "Projects",
l6: "Resume",
l7: "Connect",


//nav icon:
bar: "&#9781;",

//className:
mobile: "menu_bar",

};
const all = allObjectsUsedOnHeader;

    return `<div>
    <label class="webLabel">
    </label>
    
    <div class="navigate">
    
      <div class=${all.mobile}>${all.bar}</div>
    <ul>
    <li class="logo">
    
    ${all.l1}
    <span class="dev">
   <img src="https://eseodiase.website/images/Ese_avatar.png" width="50" height="50" style="border-radius:50%; background:#26292e;" alt=""/>
    <br/>
    Ese Odiase
    </span>  
    
     <span class="devIcons" style="visibility:hidden">
<a href="https://twitter.com/webappnfts" target="_blank"><i class="fa fa-twitter"></i></a>

<a href="https://github.com/eseodiase" target="_blank"><i class="fa fa-github"></i></a>

<a href="https://www.youtube.com/channel/UC94Q3rFwehL0v-OF-ynHiGw" target="_blank" class="link"><i class="fa fa-youtube"></i></a>

<a href="https://instagram.com/webappnfts" target="_blank"><i class="fa fa-instagram"></i></a>
          
<a href="https://wa.me/2348153929729" target="_blank"><i class="fa fa-whatsapp"></i></a>
    </span>
    
    </li>
    
    
<li class="home">
<i class="fa fa-home"></i>
<a href="#">${all.l2}</a>
</li>

<li class="about">
<i class="fa fa-user"></i>
<a href="#">${all.l3}</a>
</li>

<li class="skills">
<i class="fa fa-keyboard"></i>
<a href="#">${all.l4}</a>
</li>

<li class="project">
<i class="fa fa-th-large"></i>
<a href="#">${all.l5}</a>
</li>

<li class="resume">
<i class="fa fa-file-text"></i>
<a href="#">${all.l6}</a>
</li>

<li class="connect">
<i class="fa fa-envelope"></i>
<a href="#">${all.l7}</a>
</li>
    </ul>
    
    </div>
 
           </div>`;
};
export default nav;
