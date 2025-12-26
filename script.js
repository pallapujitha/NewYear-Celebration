// Countdown
const newYear = new Date("Jan 1, 2026 00:00:00").getTime();
setInterval(()=>{
 let now = new Date().getTime();
 let d = newYear - now;

 document.getElementById("days").innerHTML = Math.floor(d/(1000*60*60*24));
 document.getElementById("hours").innerHTML = Math.floor((d%(1000*60*60*24))/(1000*60*60));
 document.getElementById("minutes").innerHTML = Math.floor((d%(1000*60*60))/(1000*60));
 document.getElementById("seconds").innerHTML = Math.floor((d%(1000*60))/1000);
},1000);

// Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let conf=[];
for(let i=0;i<200;i++){
 conf.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*6+2,s:Math.random()*3+1,c:`hsl(${Math.random()*360},100%,50%)`});
}

function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 conf.forEach(c=>{
  ctx.beginPath();
  ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
  ctx.fillStyle=c.c;
  ctx.fill();
  c.y+=c.s;
  if(c.y>canvas.height)c.y=0;
 });
 requestAnimationFrame(draw);
}
draw();



const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", () => {
    music.play();
    playBtn.style.display = "none"; // hide button after playing
});
