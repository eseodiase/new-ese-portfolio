const allNFTs =()=>{
            const iframe0 =()=>{
                return`<div class="iframe">
                <div class="card">
                <a href="https://ipfs.fleek.co/ipfs/QmcxywYKS7noA16VtTiCjeN6rjSnpatAL2fKoggf2QjmJn/" target="_blank">
                <img src="images/jsapp.jpg" class="nfts" alt="JS App Theme"/>
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
                <a href="" target="_blank">
                <img src="images/nourishme.jpg" class="nfts" alt="NourishMe Theme"/>
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
                <a href="https://ipfs.fleek.co/ipfs/QmVq5Hq2hSqkFRiNCv85sUHUEKby31meSBieFSGi2b2uwM/" target="_blank">
                <img src="images/motif.jpg" class="nfts" alt="Motif Theme"/>
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
                <a href="https://ipfs.fleek.co/ipfs/QmZ8zfcHS1J5yg9aF1fMK7y4iavGuDwmCgZc8VYwx29YSh/" target="_blank">
                <img src="images/Brainie.jpg" class="nfts" alt="Brainie Theme"/>
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
                
                <img src="images/coming.png" class="nfts" alt="Coming Soon"/>
                
                </div>
                <p>
                Web App
                <br/>
                <span class="languages">
                React JS
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
