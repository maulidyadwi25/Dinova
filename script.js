function onclickslide1(){
    let slide1 = document.getElementById('slider1');
    let slide2 = document.getElementById('slider2');
    let slide3 = document.getElementById('slider3');
    slide1.classList.add('active');
    slide2.classList.remove('active');
    slide3.classList.remove('active');
}
function onclickslide2(){
    let slide1 = document.getElementById('slider1');
    let slide2 = document.getElementById('slider2');
    let slide3 = document.getElementById('slider3');
    slide1.classList.remove('active');
    slide2.classList.add('active');
    slide3.classList.remove('active');
}
function onclickslide3(){
    let slide1 = document.getElementById('slider1');
    let slide2 = document.getElementById('slider2');
    let slide3 = document.getElementById('slider3');
    slide1.classList.remove('active');
    slide2.classList.remove('active');
    slide3.classList.add('active');
}