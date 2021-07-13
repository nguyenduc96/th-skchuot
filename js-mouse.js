let imgquaBong=document.getElementById('quaBong');
function init(){
    imgquaBong=document.getElementById('quaBong');
    imgquaBong.style.position='relative';
    imgquaBong.style.left='10px';
}
function moveRight(){
    imgquaBong.style.left=parseInt(imgquaBong.style.left) + 20 +'px';
}
function moveLeft(){
    imgquaBong.style.left=parseInt(imgquaBong.style.left) - 20 +'px';
}
window.onload = init;
