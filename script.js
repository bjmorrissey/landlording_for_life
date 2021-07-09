const leftFooter = document.querySelector('.leftft')
const podcastArea = document.querySelector('.podcast-area')

let date = new Date(); 

leftFooter.innerHTML = `Landlording for Life<br>
     © 2019-${date.getFullYear()} Landlording for Life Podcast<br>`

let API_URL = `https://soundcloud.com/oembed?format=json&url=`


let link = 'https://soundcloud.com/sean-morrissey-899912223/van-sturgeon-how-to-save-30-to-50-in-renovation-costs'


async function grabShow(url) {
     let show;
     const API_URL = `https://soundcloud.com/oembed?format=json&url=`
     
     await fetch(API_URL + url)
     .then (res => res.json()) 
     .then (data => show = data)

     const showURL = show.html
     const visualIndex = show.html.indexOf('visual')+7
     const srcIndex = show.html.indexOf('src')+5
     const showLink = showURL.slice(srcIndex, (showURL.length-11)).replaceAll('true', 'false')
     // return show;
     console.log(show)
     console.log(show.html)
     console.log(showLink)
     // show.link = showLink;
     show.link = `<iframe width="100%" height="100" scrolling="no" frameborder="yes" src="${showLink}"></iframe>`
     displayPodcast(show)
     
}


function displayPodcast(show) {
     let showHTML =  `
     <div class="podcast">
     <div class="title">${show.title}</div>
     
     <div class="content">
     <img src="${show.thumbnail_url}">     
       <p>${show.description}<br><br>
       ${show.link}
       
       </p>

     </div>
     
     
   </div>
     `

     podcastArea.insertAdjacentHTML('afterbegin', showHTML);
}


grabShow('https://soundcloud.com/sean-morrissey-899912223/van-sturgeon-how-to-save-30-to-50-in-renovation-costs')

grabShow('https://soundcloud.com/sean-morrissey-899912223/rod-khlief-developing-mindset-to-achieve-your-dreams')

grabShow('https://soundcloud.com/sean-morrissey-899912223/david-spooner-role-of-automation-and-software-in-property-management')
