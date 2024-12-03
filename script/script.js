let videoHTML = ''
renderPage()
function renderPage() {
  videos.forEach((video) => {
  const html = `
  
    <div class="video-sec">
        <div class="thumbnail-col">
            <a href="youtube.com">
               <img src="${video.thumbnail}" width="100%"> 
               <div class="video-time-d">
                   <p class="video-time">${video.length.minutes + " : " + video.length.seconds}</p>
               </a>
            </div>            
        </div>       
        <div class="video-info-col">
            <div>
                <div class="channel-pic-div">
                    <img src="${video.channel.icon}" class="img channel-pic">
                    <div class="tooltip-container">
                        <div class="img-tooltip">
                           <img src="${video.channel.icon}" class="divtool img">                        
                        </div>
                        <div class="par-tooltip">
                            <p class="cr-name">${video.channel.name}</p>
                            <p class="ch-info">${video.channel.followers}</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                  <p class=#494949"p title">
                      ${video.title}
                  </p>
                </div>
                <div>
                  <p class="p creator">
                      ${video.channel.name}
                  </p>
                </div>
                <div>
                  <p class="p views">
                      ${video.views}
                  </p>
                </div>
            </div>
        </div>
    </div>
  `
  videoHTML += html
})
}
something()
function something() {
document.querySelector('.js-video-container').innerHTML = videoHTML
}
// the hidden small screen search input js

// wasn't as expected ... once it's fixed I may reuse this code
/*
let hiddenSearchInput = document.querySelector('.search-input-small-screen')

let searchIconSmallEl = document.querySelector('.js-search-icon-small-screen')
searchIconSmallEl.addEventListener('click', () => {
  document.querySelector('.js-small-header-div-img').classList.toggle('imgAndButtonRemoved')
  document.querySelector('.js-small-header-div-btn').classList.toggle('imgAndButtonRemoved')
  
  console.log(hiddenSearchInput)
  hiddenSearchInput.classList.toggle('search-input-small-screen-active')
    
})
*/


//the home icon btn small screen js

/*
document.querySelector('.js-home-icon-wide-screen').addEventListener('click', () => {
  console.log('has been pressed')
  renderPage()
})

document.querySelector('.js-home-icon-small-screen').addEventListener('click', () => {
  console.log('has been pressed')
  renderPage()
})

*/


//adding javascript to all other nav-icons

document.querySelectorAll('.nav-icon').forEach((btn) => {
    btn.addEventListener("click", () => {
      alert('this feature will be added soon')
    })
})

// adding javascript to all other icons

document.querySelector('.you-icon').addEventListener('click', () => {
  alert('this feature will be added soon')
})

document.querySelector('.not-icon').addEventListener('click', () => {
  alert('this feature will be added soon')
})

document.querySelector('.up-icon').addEventListener('click', () => {
  alert('this feature will be added soon')
})