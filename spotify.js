console.log("Welcome to Spotify");

// Initialize the Variables konsa song play ho raha hai//
let songIndex = 0;
let audioElement = new Audio('c:\Users\Navgurukul\Desktop\Tictac game\images\Let Me Love You(PagalWorld.com.pe).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');



let songs = [
    {songNam:"c:\Users\Navgurukul\Desktop\Tictac game\images\Let Me Love You(PagalWorld.com.pe).mp3", filepath:"c:\Users\Navgurukul\Desktop\Tictac game\images\Let Me Love You(PagalWorld.com.pe).mp3", coverPath: "./images/coverram.jpg"},

    {songName: "ram siya ram", filepath:"./images/_Ram_Siya_ Ram_PagalWorld_com_pe.mp3", coverPath: "./images/coverram.jpg"},


    {songName: "ram siya ram", filepath:"./images/_Ram_Siya_ Ram_PagalWorld_com_pe.mp3", coverPath: "./images/coverram.jpg"},

    {songName: "ram siya ram", filepath:"./images/_Ram_Siya_ Ram_PagalWorld_com_pe.mp3", coverPath: "./images/coverram.jpg"},

    {songName: "ram siya ram", filepath:"./images/_Ram_Siya_ Ram_PagalWorld_com_pe.mp3", coverPath: "./images/coverram.jpg"},

    {songName: "ram siya ram", filepath:"./images/_Ram_Siya_ Ram_PagalWorld_com_pe.mp3", coverPath: "./images/coverram.jpg"},
]

//audioElement.play();//

// Handle play/pause click button//

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

        

//Listen to Events
/*myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
});

// update seekbar*/