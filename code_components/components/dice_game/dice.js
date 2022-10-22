const diceApp =()=>{

    return`<section class="diceGame">
     <nav class="diceTitle">
            <ul>
                <li>D&#9856 ce</li>
            </ul>
        </nav>
    
      <h3>Two Players Required</h3>
      <div>
        <label>Player1</label>
        <input id="player1" class="ply" placeholder="Enter a name" />
      </div>
      
      <div>
        <label>Player2</label>
        <input id="player2" class="ply" placeholder="Enter a name" />
      </div>
      
      <button id="roll" class="roll">Roll Dice</button>
      <br/>
      
    <!-- game-->
      <div class="game">  
      <h4>Highest number wins the game</h4>
      <div class="names"></div>
      
    <!-- dice images -->
    <div class="plyr1">
    <p class="one"> &#9856;</p>
    <p class="two"> &#9857;</p>
    <p class="three"> &#9858;</p>
    <p class="four"> &#9859;</p>
    <p class="five"> &#9860;</p>
    <p class="six"> &#9861;</p>
    </div>
    
    <div class="plyr2">
    <p class="o_ne"> &#9856;</p>
    <p class="t_wo"> &#9857;</p>
    <p class="t_hree"> &#9858;</p>
    <p class="f_our"> &#9859;</p>
    <p class="f_ive"> &#9860;</p>
    <p class="s_ix"> &#9861;</p>
    </div>
    <!-- end dice images -->
    
      
      
      <div id="results"></div>
      
      </div>    <!-- end game-->

    </section> `;
}

export default diceApp;