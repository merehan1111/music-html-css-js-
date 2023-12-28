let Play=document.getElementById("play");
let Previous=document.getElementById("previous");
let Next = document.getElementById("next");
let audio = document.querySelector("audio");
let img = document.querySelector("img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let songs =[
    {
        name:"amr",
        title: "Beadt leh",
        artist: "Amr Diab"
    },
    {
        name:"shereen",
        title: "ya lili",
        artist: "shereen"
        

    },
    {
        name:"AbdelHalim",
        title: "Hawel Teftekerny",
        artist: "AbdelHalim"
    
    },
    {
        name:"umm kulthum",
        title: "ya 3youn chaghalouni",
        artist: "umm kulthum"
    },
    
    
];
let isplaying = false;
let playMusic = () =>{
    isplaying = true;
    audio.play();
    Play.classList.replace('fa-pause','fa-play');
    img.classList.add("anime");

};
let pauseMusic = () =>
{
    isplaying = false;
    audio.pause();
    Play.classList.replace('fa-pause' , 'fa-play');

};
Play.addEventListener("click" , () =>{
    if(isplaying==false)
    {
        playMusic();
    }
    else
    {
        pauseMusic();
    };
});
const loadSong =(songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    audio.src="./music/"+songs.name +".mp3";
    img.src = "./image/" +songs.name +".jpg";
}
songIndex = 1;
const nextSong = () => {
    songIndex = (songIndex+1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic()
}
const prevSong = () =>{
    songIndex = (songIndex-1 +songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

Next.addEventListener('click' , nextSong);
Previous.addEventListener('click',prevSong );
let volume = document.querySelector('.volume');
function setVolume()
{
    audio.volume=volume.value / 100;
}