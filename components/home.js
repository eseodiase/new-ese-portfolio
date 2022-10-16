const home =()=>{
const homeObj = {
    //content1
       content1Title: "UPSCALING DEVELOPER",
       content1Article1: "Hi, welcome to my website. I build lightweight web themes and templates with HTML5, CSS3, ECMAScript and API.",
       content1Article2: "My apps pages are built as reusable components that get updated speedily on a single page.",
       
       content1Article3: "Explore my displayed projects here and also, as NFTs.",

       //content3
        callToAction: "Explore NFT",
        content3Txt: "Some smarth text later!",
        subTitle: "Discover",
        hash: "CREATIVE HASHTAGE",
        tag: "#designbyese",
    }        

return `<section class="homePage">

            <div class="topContainer">
            
            <div class="content1">
            <div class="subContent1a">
             <h1>${homeObj.content1Title}</h1>
             
                 <p>
                 ${homeObj.content1Article1}<span class="more">..
                 Read more
                <i class="fa fa-chevron-right"></i>
                 </span>
                 </p>
                 
                 <p class="hidden">
                 ${homeObj.content1Article2}
                 <br/>
                 
                 <br/>
                <span> 
                ${homeObj.content1Article3} <span class="less">
                Less
                <i class="fa fa-chevron-up"></i>
                </span>
                </span>
                 </p>
                 
                 <button type="button">
                 <a href="https://opensea.io/collection/
ese-odiase-web-app-collections">
                 ${homeObj.callToAction}
                 </a>
                 </button>
            </div>
            
            <div class="subContent1b"></div>
            
            </div>
             
            <div class="content2">
            <div class="subContent2">
   <h3>${homeObj.subTitle}</h3>
   <iframe src="https://eseodiase.website/projects/nft_images.html" class="nftAction"></iframe>
   <p>« Explore project demos »</p>
            </div>
            </div>
            
            </div>
   
    <div class="box1">
    <p>${homeObj.hash}
    <span class="arrow">
    →
    </span>
    </p>
    </div>
    
    <div class="box2">
    <p>${homeObj.tag}</p>
    </div>
    
    <div class="box3">
    <a href="https://twitter.com/webappnfts" target="_blank">
    <i class="fa fa-twitter"></i>
    </a>
    
    <a href="https://instagram.com/webappnfts" target="_blank">
    <i class="fa fa-instagram"></i>
    </a>
    
    <a href="https://www.youtube.com/channel/UC94Q3rFwehL0v-OF-ynHiGw" target="_blank">
    <i class="fa fa-youtube"></i>
    </a>

    <a href="https://wa.me/2348153929729" target="_blank">
    <i class="fa fa-whatsapp"></i>
    </a>

    <a href="https://github.com/eseodiase" target="_blank">
    <i class="fa fa-github"></i>
    </a>
    </div>
                 
             </section>`;
}    
export default home;
