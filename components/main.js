
var like = document.getElementsByClassName("section-gallery__item-shadow-like");
var lable = document.getElementById('lable');

like[0].addEventListener('click', function(){
    like[0].style.backgroundPosition = "-29px -101px";
});    

lable.onmousedown = function(e){
    lable.style.position = 'absolute';
    function moveAt(e){
        lable.style.left = e.pageX - lable.offsetWidth / 2 + 'px';
        lable.style.top = e.pageY - lable.offsetHeight / 2 + 'px';
    }
        
    document.onmousemove = function(e){
        moveAt(e);
    }
        
    lable.onmouseup = function(){
        document.onmousemove = null;
        lable.onmouseup = null;
    }
}