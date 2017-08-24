console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new value";
var img=document.getElementById('pic');
var marginLeft=0;
var moveRight = function(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
   };
   img.onclick=function(){
       setInterval(moveRight,100);
   }