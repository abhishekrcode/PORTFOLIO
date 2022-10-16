console.log("Welcome to My Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let beat = document.getElementById('beat');
let mastersongname = document.getElementById('mastersongname');
let songList = Array.from(document.getElementsByClassName('songList'));

let songs = [
    { songName: "Girls Like You", filePath: "songs/1.mp3 ", coverPath: "cover1.jpg " },
    { songName: "Naina", filePath: "songs/2.mp3 ", coverPath: "cover1.jpg " },
    { songName: "Besabriyaan", filePath: "songs/3.mp3 ", coverPath: "cover1.jpg " },
    { songName: "Thoda sa pyaar", filePath: "songs/4.mp3 ", coverPath: "cover1.jpg " },
    { songName: "Kaise Hua", filePath: "songs/5.mp3 ", coverPath: "cover1.jpg " },

]
songList.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        beat.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        beat.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;


})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
         if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        beat.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        beat.style.opacity = 0;
    }

        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = "songs/"+(songIndex+1)+".mp3";
        mastersongname.innerText=songs[songIndex].songName;
        console.log(songIndex);
        audioElement.currentTime = 0;
        audioElement.play();
        beat.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        
    })
})
document.getElementById('next').addEventListener("click",()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = "songs/"+(songIndex+1)+".mp3";
        console.log(songIndex);
        audioElement.currentTime = 0;
        mastersongname.innerText=songs[songIndex].songName;

        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex= 4;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = "songs/"+(songIndex+1)+".mp3";
        console.log(songIndex);
        audioElement.currentTime = 0;
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})
