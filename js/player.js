
const playBtn = document.querySelector('.VideoProduction-iconPlay')
const textContainer = document.querySelector('.VideoProduction-containerInfo')
const wrapper = document.querySelector('.VideoProduction-wrapper')
// const mainPreviewVideo = document.querySelector('.VideoProduction-previewVideo')
const portfolioPreviewVideo = document.querySelector('.PortfolioVideoProduction-previewVideo')

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      events: {
        'onStateChange': onStateChange,
        // 'onReady': mutePlayer
        'onReady': setFullHD
      }
    });
  }
function onStateChange(event){
    handleEnding(event.data)
    handlePlayPause(event.data)
}

function handleEnding(playerStatus){
    if(playerStatus == 0){
        player.stopVideo()

        // mainPreviewVideo.style.display = 'block'
        portfolioPreviewVideo.style.display = 'block'
        playBtn.style.display = 'block'
    }
}

function handlePlayPause(playerStatus){
    if(playerStatus == 1){
        playBtn.style.display = 'none'
        
        // mainPreviewVideo.style.display = 'none'
        portfolioPreviewVideo.style.display = 'none'

        if (textContainer) {
            textContainer.style.display = 'none'
        }
    } else {
        if (textContainer) {
            textContainer.style.display = 'flex'
        }
    }
}

// function mutePlayer(){
//     player.mute()
// }

function setFullHD(){
    player.setPlaybackQuality('hd1080')
}

wrapper.addEventListener('click', () => {
    let state = player.getPlayerState()

    if (state == -1 || state == 2 || state == 0 || state == 5) {
        player.playVideo()

    } else if (state == 1) {
        player.pauseVideo()
    }
})