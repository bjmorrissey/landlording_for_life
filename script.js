const leftFooter = document.querySelector('.leftft')
const podcastArea = document.querySelector('.podcast-area')
const nav = document.querySelector('.nav')


window.addEventListener('scroll', fixNav)

function fixNav() {
     console.log(window.scrollY, nav.offsetHeight)

     if(window.scrollY > nav.offsetHeight - 100) {
          nav.classList.add('active')
     } else {
          nav.classList.remove('active')
     }
}



let date = new Date(); 




leftFooter.innerHTML = `Landlording for Life<br>
     © 2019-${date.getFullYear()} Landlording for Life Podcast<br>`

let API_URL = `https://soundcloud.com/oembed?format=json&url=`


let link = 'https://soundcloud.com/sean-morrissey-899912223/van-sturgeon-how-to-save-30-to-50-in-renovation-costs'


// async function grabShow(url) {
//      let show;
//      const API_URL = `https://soundcloud.com/oembed?format=json&url=`
     
//      await fetch(API_URL + url)
//      .then (res => res.json()) 
//      .then (data => show = data)

//      const showURL = show.html
//      const visualIndex = show.html.indexOf('visual')+7
//      const srcIndex = show.html.indexOf('src')+5
//      const showLink = showURL.slice(srcIndex, (showURL.length-11)).replaceAll('true', 'false')
//      // return show;
//      console.log(show)
//      console.log(show.html)
//      console.log(showLink)
//      // show.link = showLink;
//      show.link = `<iframe width="100%" height="100" scrolling="no" frameborder="yes" src="${showLink}"></iframe>`
//      displayPodcast(show)
     
// }


async function grabShow() {
     // let show;
     const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.soundcloud.com%2Fusers%2Fsoundcloud%3Ausers%3A220588129%2Fsounds.rss`
     
     await fetch(API_URL)
     .then (res => res.json()) 
     .then (data => shows = data.items)

     let total = shows.length
     let count = 0
     let sortedShows = []
// console.log(shows)
     for (i=0; i<shows.length; i++) {
          sortedShows.push(shows[i])
     }
     console.log(sortedShows)

     
     sortedShows.forEach(show => {
       
          displayPodcast(show)
     })
    
}





function displayPodcast(show) {
     

     let showHTML =  `
     <div class="podcast">
     <div class="title">${show.title}</div>
     
     <div class="content">
     <img src="${show.thumbnail}">     
       <p>${show.description}<br><br>
       
       <audio id="player" controls controlsList="nodownload">
  <source src="${show.enclosure.link}" type="audio/ogg">
  <source src="${show.enclosure.link}" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
              
       </p>

     </div>
     
     
   </div>
     `

     podcastArea.insertAdjacentHTML('beforeend', showHTML);
}


grabShow()

// grabShow('https://soundcloud.com/sean-morrissey-899912223/rod-khlief-developing-mindset-to-achieve-your-dreams')

// grabShow('https://soundcloud.com/sean-morrissey-899912223/david-spooner-role-of-automation-and-software-in-property-management')
