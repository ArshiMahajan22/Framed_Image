
function preload(){
}

function setup(){
    canvas = createCanvas(400, 380);
    canvas.position(500, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 300, 280);
    tint('white');
    background = "white";

    fill(255, 213, 0);
    stroke(255, 213, 0);
    rect(0, 3, 297, 3);
    rect(0, 280, 301, 3);
    rect(3, 0, 3, 280);
    rect(298, 0, 3, 280);

    fill(168, 140, 0);
    stroke(168, 140, 0);
    rect(0, 0, 297, 3);
    rect(0, 277, 297, 3);
    rect(0, 0, 3, 280);
    rect(295, 0, 3, 280);
}

function take_snapshot(){
    save('Frame_Img.png');
}