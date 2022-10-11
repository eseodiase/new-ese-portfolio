import header from "./components/header.js";
import lyricsOutput from "./components/main.js";
import footer from "./components/footer.js";

const lyricsApp =()=> {
    document.querySelector(".header").innerHTML = (header());
    document.querySelector(".main").innerHTML = (lyricsOutput());
    document.querySelector(".footer").innerHTML = (footer());
    
//api
function d(c){
          return document.querySelector(c);
      }

		window.onload = function(){
		    
 async function fetchData(song, artist){
       const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1772c9ca1emshf15e2a4b58652a7p1b97c5jsnab1460cddb87',
		'X-RapidAPI-Host': 'lyrics-plus.p.rapidapi.com'
	}
};

fetch(`https://lyrics-plus.p.rapidapi.com/lyrics/${song}/${artist}`, options)

	.then(response => response.json())
    .then(response => d("#lyrics").innerHTML = (response.name, response.lyrics))
	.catch(err => console.error(err));
	
    
 }    
const inputRef = d("#search-song") 
const inputRef2 = d("#search-artist") 
		 
  fetchData("hello", "adele")
	
inputRef2.addEventListener("search", () =>{
	fetchData(inputRef.value, inputRef2.value)
		    
		 })

		}
		//api end
}
export default lyricsApp;