function change(color){
    document.body.style.backgroundColor=color;
    if (color== "#faebd7"){
        document.body.style.color="#000000";
    }else{
        document.body.style.color="#faebd7";
    }
    
}

window.addEventListener('scroll',function(){
    var nav=document.getElementById("nav");
    if(window.pageYOffset >= 100){
        nav.classList.add('sticky');
    }else{
        nav.classList.remove('sticky');
    }
});