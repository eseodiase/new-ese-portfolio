const nav = () => {
"use strict";
const allObjectsUsedOnHeader = {

//Navigation List
l1: "Symbolic CODE",
l2: "Interface",
l3: "Shapes",
l4: "Signs",
l5: "Currencies",
l6: "Emojis",
l7: "Alphabets",
l8: "Numbers",
l9: "Others",
l10: "Ese Odiase",

//developer's url:
url: "https://eseodiase.website/",

//nav icon:
bar: "&#1521;",

//className:
mobile: "menu_bar",

};
const all = allObjectsUsedOnHeader;

    return `<div style="z-index: 9999">
    <label class="webLabel">
    Symbolic CODE
    </label>
    
    <div class="navigate">
    
      <div class=${all.mobile}>${all.bar}</div>
    <ul>
    <li class="logo">${all.l1}</li>
    
<li class="pal">
<span class="symb">&#9617</span>
<a href="#">Palette</a>
</li>
    
<li class="icon">
<span class="symb">&#9869;</span>
<a href="#">${all.l2}</a>
</li>

<li class="shape">
<span class="symb">&#916;</span>
<a href="#">${all.l3}</a>
</li>

<li class="sign">
<span class="symb">&#8693;</span>
<a href="#">${all.l4}</a>
</li>

<li class="currency">
<span class="symb">&#8358;</span>
<a href="#">${all.l5}</a>
</li>

<li class="emoji">
<span class="symb">&#9975</span>
<a href="#">${all.l6}</a>
</li>

<hr>

<li class="alpa">
<span class="symb1">&#65;&#66;&#67</span>
<a href="#">${all.l7}</a>
</li>

<li class="num">
<span class="symb1">&#49;&#50;&#51;</span>
<a href="#">${all.l8}</a>
</li>

<li class="others">
<span class="symb1">&#60;&#47;&#62;</span>
<a href="#">${all.l9}</a>
</li>


<li class="dev">
<img src="https://ipfs.fleek.co/ipfs/bafybeiduikxoxgjejuihp2jyzdgjtu5ywepzygeld5io4og6nc3v4cpic4" width="50" height="50" style="border-radius:50%; background:#26292e;" alt="Dev"/>
    <br/>
    Developed by
    <a href=${all.url}>${all.l10}</a>
    </li>  
    </ul>
    
    </div>
 
           </div>`;
};
export default nav;
