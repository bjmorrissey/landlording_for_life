const leftFooter = document.querySelector('.leftft')
const podcastArea = document.querySelector('.podcast-area')
const nav = document.querySelector('.nav')
const toggleBtn = document.querySelector('.toggle')
const menu = document.querySelector('.menu ul')
const main = document.querySelector('main')
const navActive = document.querySelector('.nav.active')


window.addEventListener('load', navLoad)
window.addEventListener('scroll', navScroll)
window.onresize = reportWindowSize;

function navLoad() {
     if (window.innerWidth < 950) {
          toggleButton();
     } 
}


function reportWindowSize() {
     let winX = window.innerWidth
     if(winX < 950) {
          toggleButton()
     } else {
          removeToggle()
          nav.style.flexDirection = 'column'
          
     } 
     console.log(winX)

   }
   
console.log(window.innerWidth)

function navScroll() {
    if (window.innerWidth > 950) {
         if (window.scrollY > nav.offsetHeight - 100) {
              nav.classList.add('active')
              nav.style.flexDirection = 'row'
         } else {
             nav.classList.remove('active') 
             nav.style.flexDirection = 'column'
         }
     } 
    
}



function toggleButton() {
    nav.classList.add('active')
    toggleBtn.style.display = 'flex'
    menu.style.display = 'none'
     
}

function removeToggle() {
     toggleBtn.style.display = 'none'
     menu.style.display = 'flex'
     menu.style.flexDirection = 'row'
}



toggleBtn.addEventListener('click', function() {
    if (menu.style.display === 'none') {
         menu.style.display = 'flex'
         menu.style.flexDirection = 'column'
         menu.style.textAlign = 'center'
         nav.style.flexDirection = "column"
    } else {
         menu.style.display = 'none'
         menu.style.flexDirection = 'row'
     //     nav.style.flexDirection = "row"
    
    }
})


let date = new Date(); 




leftFooter.innerHTML = `Landlording for Life<br>
     © 2019-${date.getFullYear()} Landlording for Life Podcast<br>`

let API_URL = `https://soundcloud.com/oembed?format=json&url=`


let link = 'https://soundcloud.com/sean-morrissey-899912223/van-sturgeon-how-to-save-30-to-50-in-renovation-costs'





async function grabShow() {

     const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.soundcloud.com%2Fusers%2Fsoundcloud%3Ausers%3A220588129%2Fsounds.rss`
     
     await fetch(API_URL)
     .then (res => res.json()) 
     .then (data => shows = data.items)

     let total = shows.length
     let count = 0
     let sortedShows = []

     for (i=0; i<shows.length; i++) {
          sortedShows.push(shows[i])
     }
     
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
