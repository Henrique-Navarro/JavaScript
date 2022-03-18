let slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides= document.getElementsByClassName("imgs-background");
  let dots= document.getElementsByClassName("dot");
  
  //tratar situações de soma/subtração das setinhas
  if(n > slides.length){
    slideIndex=1;
  }
  if(n < 1){
    slideIndex=slides.length;
  }
  
  //fazer todos os slides desaparecerem
  for(i=0; i<slides.length; i++){
    slides[i].style.display="none";
  }
  
  //ativar slides conforme dot está selecionado
  for(i=0; i< dots.length; i++){
    dots[i].className= dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}