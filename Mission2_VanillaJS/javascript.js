window.addEventListener("scroll", function(){

    let winHeight = window.innerHeight;
    let docHeight = document.body.clientHeight;
    let scrollTop = window.pageYOffset;
    let trackHeight = docHeight - winHeight;

    let percentage = Math.floor ( (scrollTop / trackHeight) *100 );

    //console.log(percentage);

    let moon = document.querySelector(".moon");

    moon.style.right = "-" + (percentage / 10) + "%";
    moon.style.transform =
        "scale(" + eval(1 + parseFloat(percentage/1000))  + ") "+
        "rotate("+(percentage/5) +"deg)";

    let astronaut = document.querySelector(".astronaut");
    astronaut.style.transform = "rotate("+ (percentage/10) +"deg)";
    astronaut.style.right = (percentage / 10)+ "%"; 

    let satellite1 = document.querySelector(".satellite1");
    satellite1.style.right = (percentage + 35) + "%";
    satellite1.style.bottom = (percentage / 2) + "%";
    satellite1.style.transform = "rotate("+(percentage *3)+"deg)";

    let satellite2 = document.querySelector(".satellite2");
    satellite2.style.transform = "rotate("+ percentage +"deg)";
    satellite2.style.left = percentage / 2 + "%";
    satellite2.style.top = percentage + "%";

    let particles = document.querySelector(".particles");
    particles.style.backgroundSize = 100 + (percentage/2) + "%";

});