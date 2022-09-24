const home =()=>{
const homeObj = {
    //content1
       content1Title: "UPSCALING DEVELOPER",
       content1Article1: "Hello, welcome to my website. I build responsive web applications with HTML, CSS and JavaScript. Most of my developements are single page 'JavaScript' applications. i.e, these web apps behave just like React.",
       content1Article2: "You can interact with any of the web pages without having to do a fresh loading. Do feel free to explore my project demos displayed on this website.",
       
       content1Article3: "Also, my projects are available as NFTs.",
       
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
                 ${homeObj.callToAction}
                 </button>
            </div>
            
            <div class="subContent1b"></div>
            
            </div>
             
            <div class="content2">
            <div class="subContent2">
   <h3>${homeObj.subTitle}</h3>
   <iframe src="https://eseodiase.github.io/new-ese-portfolio/nft_images.html" class="nftAction"></iframe>
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
    <i class="fa fa-twitter"></i>
    <i class="fa fa-instagram"></i>
    <i class="fa fa-youtube"></i>
    <i class="fa fa-whatsapp"></i>
    <i class="fa fa-github"></i>
    </div>
                 
             </section>`;
}    
export default home;
