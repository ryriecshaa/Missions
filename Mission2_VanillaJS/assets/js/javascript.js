let winHeight = window.innerHeight;
let docHeight = document.body.clientHeight;
let scrollTop = window.pageYOffset;
let trackHeight = docHeight - winHeight;

let percentage = Math.floor ( (scrollTop / trackHeight) *100 );


window.onload = () => {
  startSetTimeoutAnimation();
};

  function startSetTimeoutAnimation() {
    const refreshRate = 10000 / 40;
    let speedPercentage = 10;
    let minPercentage = 0;
    let maxPercentage = 100;
    let moon = document.getElementById('moon');
    let satellite1 = document.getElementById('satellite1');
    let satellite2 = document.getElementById('satellite2');
    let particles = document.querySelector(".particles");
    let reverse = 0;

    window.setInterval(() => {
      // minPercentage = minPercentage + speedPercentage;
      console.log(speedPercentage)
      if (speedPercentage < maxPercentage && reverse == 0) {
        speedPercentage = speedPercentage + 10;
      }
      else{
        speedPercentage = speedPercentage - 10;
      }
      if (speedPercentage == maxPercentage){
        reverse = 1;
      }
      else if (speedPercentage == minPercentage){
        reverse = 0;
      }
      moon.style.right = "-" + (speedPercentage / 10) + "%";
      moon.style.transform =
        "scale(" + eval(1 + parseFloat(speedPercentage/1000))  + ") "+
        "rotate("+(speedPercentage/5) +"deg)";

      astronaut.style.transform = "rotate("+ (speedPercentage/10) +"deg)";
      astronaut.style.right = (speedPercentage / 10)+ "%"; 
  
      satellite1.style.right = (speedPercentage + 35) + "%";
      satellite1.style.bottom = (speedPercentage / 2) + "%";
      satellite1.style.transform = "rotate("+(speedPercentage *3)+"deg)";
  
      satellite2.style.transform = "rotate("+ speedPercentage +"deg)";
      satellite2.style.left = speedPercentage / 2 + "%";
      satellite2.style.top = speedPercentage + "%";
  
      particles.style.backgroundSize = 100 + (speedPercentage/2) + "%";
    }, refreshRate);
}