
function setup()
{
    canvas = createCanvas(500,500);
    canvas.position(390,300);
    video = createCapture(VIDEO);video.hide();
}

function draw()
{
    image(video,0,0,500,500);
}


function take_snapshot()
{
    save('filtered_me.png')
}

function preload()
{

}