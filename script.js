score=0; 
cross=true;
let audio=new Audio("https://assets.mixkit.co/sfx/preview/mixkit-game-level-music-689.mp3");
let over=new Audio("https://audio-previews.elements.envatousercontent.com/files/268184182/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22DBHCXFG-goblin-death-13.mp3%22");
let up=new Audio("https://assets.mixkit.co/sfx/preview/mixkit-quick-win-video-game-notification-269.mp3");



document.onkeydown=function(e){
  
  if(e.keyCode==38){
    let dino=document.querySelector(".obstacle");
    dino.classList.add("dino-anime");
    setTimeout(()=>{
       dino.classList.remove("dino-anime");
    },700);
  }
  if(e.keyCode==39){
    dino=document.querySelector(".obstacle");
    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    
    dino.style.left=dinoX+142+"px";
 
  }
   if(e.keyCode==37){
    dino=document.querySelector(".obstacle");
    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dino.style.left=dinoX-142+"px";
 
  }
}
setInterval(()=>{
  dino=document.querySelector(".obstacle");
   gameOver=document.querySelector(".game-over");
  obstacle=document.querySelector(".dino");
    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));
    ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));
  offsetX=Math.abs(dx-ox);
   offsetY=Math.abs(dy-oy);
  if(offsetX<73 && offsetY<93){
    gameOver.style.visibility="visible";
    dino.style.visibility="hidden";
   audio.pause();
    over.load();
    over.play();
    obstacle.classList.remove("obstacleani");
  }else if(offsetX<145 && cross==true){
    score+=1
    updateScore(score);
    up.load();
    up.play();
    cross=false;
    setTimeout(()=>{
      cross=true;
    },1000);
   setTimeout(()=>{
     anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animation-duration"));
     if(anidur!=3){
    newdur=anidur-0.1;
    obstacle.style.animationDuration=newdur+"s";}
   },500) ;
  }

    },100);
function updateScore(score){
  scoreCont.innerHTML="Your Score: "+ score}
function Start(){
  document.querySelector(".game-container").style.display="inherit";
    dino.style.visibility="visible";
  document.querySelector(".firstView").style.display="none";
  obstacle.classList.add("obstacleani");
  obstacle.style.animationDuration="5s";
    audio.loop=true;
  audio.load();
  audio.play();
  
}
function back(){
   document.querySelector(".game-container").style.display="none";
   document.querySelector(".game-over").style.visibility="hidden";
score=0;
  document.querySelector(".firstView").style.display="inherit";
  
  audio.pause();
}

