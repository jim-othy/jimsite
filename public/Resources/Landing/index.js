var audio = new Audio('./Resources/Music/homepage.mp3');
var playing = false
function btnstuff() {
    if(playing == false) {
        console.log("Playing...");
        document.getElementById("btn").innerHTML = "<i class=\"fa-sharp fa-solid fa-pause\"></i>"
        audio.play();
        playing = true
        return
    }
    if(playing == true) {
        console.log("Stopped.")
        document.getElementById("btn").innerHTML = "<i class=\"fa-sharp fa-solid fa-play\"></i>"
        audio.pause();
        playing = false
        return
    }
}