lsx=0
lsy=0

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    video.size(300,300)
    

      PoseNet = ml5.poseNet(video, modeloaded)
    PoseNet.on('pose',gotPoses)
}


function modeloaded(){
    console.log("PoseNet Is Intialized")
}


function draw(){
    image(video,0,0,300,300)
   /*fill(200, 157, 200);
  stroke(100,23, 255);
  circle(10, 10, 45);
  circle(630, 10, 45);
  circle(10, 470, 45);
  circle(630, 470, 45);

  fill(200, 157, 200);
  stroke(100,23, 255);
  rect(0, 0, 640, 10);
  rect(0, 470, 640, 10);
  rect(0, 0, 10, 480);
  rect(630, 0, 10, 480);*/

  image(clown_nose,lsx,lsy,40,20)

}



function take_snapshot(){
    save("filterimage.png")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lsx=results[0].pose.nose.x-15
   lsy=results[0].pose.nose.y+15
        console.log("lipsx= "+lsx);
        console.log("lipsy= "+lsy);
    }
}


