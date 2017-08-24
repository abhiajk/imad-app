console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new value";
var img=document.getElementById('pic');
img.onclick = function(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
    setInterval(moveRight,100);
};