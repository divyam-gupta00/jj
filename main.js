song="";
function preload(){
    
}
function setup(){
    canvas= createCanvas(500,400)
    canvas.center()
    video= createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video, 0,0,600, 500)
}
function play1(){
    song.play()
}
function stop1(){
    song.stop()
}