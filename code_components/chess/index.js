const chessboard =()=>{
    
    const allCode = ()=>{
    return `
    <h1>Static Chessboard</h1>

<p>The chess pieces used are from Symbolic CODE by Ese Odiase</p>

<div class="grid-container">
  <div id="dark" class="item1">&#9820</div>
  
  <div class="item2">&#9822</div>
  
  <div id="dark" class="item3">&#9821</div>  
  
  <div class="item4">&#9819</div>
  
  <div id="dark" class="item5">&#9818</div>
  
  <div class="item6">&#9821</div>
  
  <div id="dark" class="item7">&#9822</div>
  
  <div class="item8">&#9820</div>
</div>

<div class="grid-container">
  <div class="item1">&#9823</div>
  
  <div id="dark" class="item2">&#9823</div>
  
  <div class="item3">&#9823</div>  
  
  <div id="dark" class="item4">&#9823</div>
  
  <div class="item5">&#9823</div>
  
  <div id="dark" class="item6">&#9823</div>
  
  <div class="item7">&#9823</div>
  
  <div id="dark" class="item8">&#9823</div>
</div>

<div class="grid-container">
  <div id="dark" class="item1">
  <span class="blank"></span>
  </div>
  
  <div class="item2">
 <span class="blank"></span>
  </div>
  
  <div id="dark" class="item3">
  <span class="blank"></span>
  </div>  
  
  <div class="item4">
  <span class="blank"></span>
  </div>
  
  <div id="dark" class="item5">
  <span class="blank"></span>
  </div>
  
  <div class="item6">
  <span class="blank"></span>
  </div>
  
  <div id="dark" class="item7">
  <span class="blank"></span>
  </div>
  
  <div class="item8">
  <span class="blank"></span>
  </div>
</div>

<div class="grid-container">
  <div class="item1">
  <span class="blank"></span>
  </div>
  
  <div id="dark" class="item2">
  <span class="blank"></span>
  </div>
  
  <div class="item3">
  <span class="blank"></span>
  </div>  
  
  <div id="dark" class="item4">
  <span class="blank"></span>
  </div>
  
  <div class="item5">
  <span class="blank"></span>
  </div>
  
  <div id="dark" class="item6">
  <span class="blank"></span>
  </div>
  
  <div class="item7">
  <span class="blank"></span>
  </div>
  
  <div id="dark" class="item8">
  <span class="blank"></span>
  </div>
</div>

<div class="grid-container">
  <div id="dark" class="item1">
  <span class="blank"></span>
  </div>
  
  <div class="item2">
  <span class="blank"></span>
  </div>
  
  <div id="dark" class="item3">
  <span class="blank"></span>
  </div>  
  
  <div class="item4">
  <span class="blank"></span>
  </div>
  
  <div id="dark" class="item5">
  <span class="blank"></span>
  </div>
  
  <div class="item6">
  <span class="blank"></span>
  </div>
  
  <div id="dark" class="item7">
  <span class="blank"></span>
  </div>
  
  <div class="item8">
  <span class="blank"></span>
  </div>
</div>

<div class="grid-container">
  <div class="item1">
  <span class="blank"></span>
  </div>
  
  <div id="dark" class="item2">
  <span class="blank"></span>
  </div>
  
  <div class="item3">
  <span class="blank"></span>
  </div>  
  
  <div id="dark" class="item4">
  <span class="blank"></span>
  </div>
  
  <div class="item5">
  <span class="blank"></span>
  </div>
  
  <div id="dark" class="item6">
  <span class="blank"></span>
  </div>
  
  <div class="item7">
  <span class="blank"></span>
  </div>
  
  <div id="dark" class="item8">
  <span class="blank"></span>
  </div>
</div>

<div class="grid-container">
  <div id="dark" class="item1">
  <span class="darkPieces">&#9823</span>
  </div>
  
  <div class="item2">
  <span class="darkPieces">&#9823</span>
  </div>
  
  <div id="dark" class="item3">
  <span class="darkPieces">&#9823</span>
  </div>  
  
  <div class="item4">
  <span class="darkPieces">&#9823</span>
  </div>
  
  <div id="dark" class="item5">
  <span class="darkPieces">&#9823</span>
  </div>
  
  <div class="item6">
  <span class="darkPieces">&#9823</span>
  </div>
  
  <div id="dark" class="item7">
  <span class="darkPieces">&#9823</span>
  </div>
  
  <div class="item8">
  <span class="darkPieces">&#9823</span>
  </div>
</div>

<div class="grid-container">
  <div class="item1">
  <span class="darkPieces">&#9820</span>
  </div>
  
  <div id="dark" class="item2">
  <span class="darkPieces">&#9822</span>
  </div>
  
  <div class="item3">
  <span class="darkPieces">&#9821</span>
  </div>  
  
  <div id="dark" class="item4">
  <span class="darkPieces">&#9819</span>
  </div>
  
  <div class="item5">
  <span class="darkPieces">&#9818</span>
  </div>
  
  <div id="dark" class="item6">
  <span class="darkPieces">&#9821</span>
  </div>
  
  <div class="item7">
  <span class="darkPieces">&#9822</span>
  </div>
  
  <div id="dark" class="item8">
  <span class="darkPieces">&#9820</span>
  </div>
</div>
    `;
}
document.querySelector(".main").innerHTML = (allCode());

}
export default chessboard;