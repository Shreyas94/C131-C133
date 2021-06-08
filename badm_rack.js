

img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('badm_rack.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects" 
}

function draw(){
    fill('FF0000');
    text("Badminton Racket", 320, 120);
    noFill();
    stroke('#FF0000');
    rect(300, 90, 270, 320);
}


function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
    function gotResult(error, results){
    if (error){
        console.error(error);
    }
    console.log(results); 
    object = results;   
}


}


if (status != ""){
    for (i = 0; i < objects.length; i++)
{
    document.getElementById("status").innerHTML = "Status : Object Detected";

    fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}    }

function back(){
    location.replace("index.html")
}