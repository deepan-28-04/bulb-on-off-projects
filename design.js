var bulb=0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src = "bulb on img.jpg";
        bulb=1;
    }
    else{
        document.getElementById("image").src = "bulb off img.jpg"
        bulb=0;
    }
}