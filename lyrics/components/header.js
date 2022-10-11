const header =()=>{
    return `<div class="top">
    
    <nav>
     <ul>
    <li class="logo">
    247 Lyrics Finder
    </li>
    
    <li class="about">
    
    </li>
    </ul>
    </nav>
    
    <div class="search">
      <form>
      <br/>
      <br/>
      <label>Song name:</label>
      <input type="search" id="search-song" value="hello">
      <br/>
      <label>Artist name:</label>
    <input type="search" id="search-artist" value="adele">
    <p class="key"> Hit "Enter key" or tap "Search icon" on your keyboard/keypad to search.</p>
    </form>
    </div>
    
    </div>`;
}
export default header;