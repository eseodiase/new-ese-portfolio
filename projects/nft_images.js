const allNFTs =()=>{
            const iframe0 =()=>{
                return`<div class="iframe">
                <div class="card">
                <a href="https://js-app.on.fleek.co/" target="_blank">
                <img src="https://eseodiase.github.io/new-ese-portfolio/projects/images/jsapp.jpg" class="nfts" alt="JS App Theme"/>
                </a>
                </div>
                <p>
                Simple Theme
                <br/>
                <span class="languages">
                HTML/CSS/JavaScript
                </span>
                </p>
                </div>`;
            }

            //
            const iframe1 =()=>{
                return`<div class="iframe">
                <div class="card">
                <a href="https://nourishme.on.fleek.co/" target="_blank">
                <img src="https://eseodiase.github.io/new-ese-portfolio/projects/images/nourishme.jpg" class="nfts" alt="NourishMe Theme"/>
                </a>
                </div>
                <p>
                E-commerce Theme
                <br/>
                <span class="languages">
                HTML/CSS/JavaScript
                </span>
                </p>
                </div>`;
            }
            
            //
            const iframe2 =()=>{
                return`<div class="iframe">
                <div class="card">
                <a href="https://motif.on.fleek.co/" target="_blank">
                <img src="https://eseodiase.github.io/new-ese-portfolio/projects/images/motif.jpg" class="nfts" alt="Motif Theme"/>
                </a>
                </div>
                <p>
                Portfolio Theme
                <br/>
                <span class="languages">
                HTML/CSS/JavaScript
                </span>
                </p>
                </div>`;
            }
            
            const iframe3 =()=>{
                return`<div class="iframe">
                <div class="card">
                <a href="https://brainie.on.fleek.co/" target="_blank">
                <img src="https://eseodiase.github.io/new-ese-portfolio/projects/images/Brainie.jpg" class="nfts" alt="Brainie Theme"/>
                </a>
                </div>
                <p>
                Publisher Template
                <br/>
                <span class="languages">
                HTML/CSS/JavaScript
                </span>
                </p>
                </div>`;
            }
            
const iframe4 =()=>{
                return`<div class="iframe">
                <div class="card">
                
                <a href="https://eseodiase.website/lyrics/index.html" target="_blank">
                <img src="https://eseodiase.website/images/Lyrics.jpg" class="nfts" alt="Lyrics App Image"/>
                </a>
                </div>
                <p>
                Lyrics App
                <br/>
                <span class="languages">
                HTML/CSS/JavaScript and API
                </span>
                </p>
                </div>`;
}
            
            const allFrames =()=>{
              document.querySelector(".myIframe").innerHTML = ( iframe0 () + iframe1 () + iframe2() + iframe3() + iframe4());
            }
            allFrames();
}
export default allNFTs;
