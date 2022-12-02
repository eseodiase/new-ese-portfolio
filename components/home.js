const home =()=>{
const homeObj = {
    //content1
       content1Intro: "Hi, my name is",
       content1Title: "Ese Odiase",
       content1SubTitle: "UPSCALING FRONT-END DEVELOPER",
       content1Article1: "I'm a web developer and I specialize in creating lightweight web applications. Occasionally: graphic design.",
       content1Article2: "I'm concentrating on creating web themes and templates that are offered as NFTs right now.",
       content1Article3: "",
       
       //content3
        callToAction: "Explore My NFT Project",
        content3Txt: "Some smarth text later!",
        subTitle: "Discover",
        hash: "CREATIVE HASHTAGES→",
        tag1: "#designbyese",
        tag2: "#developedbyese",
        tag3: "#ProgrammingCodeNFTs",
    }        

return `<section class="homePage">

            <div class="topContainer">
            
            <div class="content1">
            <div class="subContent1a">
            <div class="intro">
             <p>${homeObj.content1Intro}</p>
             <h1>${homeObj.content1Title}</h1>
             <h6>${homeObj.content1SubTitle}</h6>
            </div> 
                 <p>
                 ${homeObj.content1Article1}<span class="more">..
                 Read more
                <i id="shorts" class="fa fa-chevron-right"></i>
                 </span>
                 
                 <span class="hidden">
                 ${homeObj.content1Article2}<span> 
                ${homeObj.content1Article3}<span class="less">
                Less
                <i id="shorts" class="fa fa-chevron-up"></i>
                </span>
                </span>
                
                </span>
                
                
                

                 </p>
                 
                 <button type="button">
                <a href="https://opensea.io/collection/ese-odiase-web-app-collections" target="_blank" class="nft_btn">
                 ${homeObj.callToAction}
                 </a>
                 </button>
                 
                  <div class="iconC">
<a href="https://twitter.com/webappnfts" target="_blank" class="social"><i class="fa fa-twitter"></i></a>
    
<a href="https://github.com/eseodiase" target="_blank" class="social"><i class="fa fa-github"></i></a>

<a href="https://www.youtube.com/channel/UC94Q3rFwehL0v-OF-ynHiGw" target="_blank" class="social"><i class="fa fa-youtube"></i></a>

<a href="https://instagram.com/webappnfts" target="_blank" class="social"><i class="fa fa-instagram"></i></a>
          
<a href="https://wa.me/2348153929729" target="_blank" class="social"><i class="fa fa-whatsapp"></i></a>
    </div>
    
            </div>
            </div>

             
            <div class="content2">
   <h3>${homeObj.subTitle}</h3>
   <iframe src="https://eseodiase.website/projects/nft_images.html" class="nftAction"></iframe>
   <p>« Explore project demos »</p>
            </div>
            
            
            </div>
   
    <div class="box1">
    <p>${homeObj.hash}
    </p>
    </div>
    
    <div class="box2">
    <p>${homeObj.tag1}</p>
    <p>${homeObj.tag2}</p>
    <p>${homeObj.tag3}</p>
    </div>
    
    <div class="box3">
<a href="https://twitter.com/webappnfts" target="_blank" class="social"><i class="fa fa-twitter"></i></a>
    
<a href="https://github.com/eseodiase" target="_blank" class="social"><i class="fa fa-github"></i></a>

<a href="https://www.youtube.com/channel/UC94Q3rFwehL0v-OF-ynHiGw" target="_blank" class="social"><i class="fa fa-youtube"></i></a>

<a href="https://instagram.com/webappnfts" target="_blank" class="social"><i class="fa fa-instagram"></i></a>
          
<a href="https://wa.me/2348153929729" target="_blank" class="social"><i class="fa fa-whatsapp"></i></a>


  <div class="box3b">
  <h3> My Web Tools </h3>
<i id="social" class="fa fa-code"></i>
    
<i id="social" class="fa fa-">{}</i>

<i id="social" class="fa fa-database"></i>

<i id="social" class="fa fa-server"></i>

<i id="social" class="fa fa-search"></i>
    </div>
                

    </div>
                 
             </section>`;
}    
export default home;
