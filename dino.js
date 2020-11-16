var character= document.getElementById('character');
var block= document.getElementById('block');
var counter=0;
function jump() {
 character.classList.add("animate");
 setTimeout(function(){
     character.classList.remove("animate");
 },500);
}
var dead=setInterval(function (){
    var charTop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
   
    if(blockLeft<20 &&  blockLeft>-20  && charTop>=130)
   {
       block.style.animation="none";
       alert("game over || your score: "+Math.floor(counter/100));
       counter=0;
        block.style.animation = "block 1s infinite linear";
    }
    else {
        counter++;
        document.getElementById('score').innerHTML = Math.floor(counter / 100);
    }
},100);
