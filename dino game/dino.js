var character= document.getElementById('character');
var block= document.getElementById('block');
function jump() {
 character.classList.add("animate");
 setTimeout(function(){
     character.classList.remove("animate");
 },500);
}
var dead=setInterval(function (){
    var charTop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
   
    if(blockLeft<20 &&  blockLeft>0  && charTop>=130)
   {
       block.style.animation="none";
       block.style.display = "none";
       alert("game over");
    }
},10);