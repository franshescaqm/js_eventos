window.addEventListener('load', function(event){
/*console.log(event); // ver caracterisitcas del evento en consola
console.log(event.target); //Recibe-ejecuta la carga
console.log(event.currentTarget); // El que escucha el evento -- No todos los elementos se asocian a todos los eventos --
*/
var title = document.body.firstElementChild;
//console.log(title);
title.addEventListener('mouseover', function(){
  //console.log(event.target);
  title.textContent = 'hola, otra vez';
})
title.addEventListener('mouseout',function(event){
  title.textContent = 'Hola Mundo!';
})
var image = document.body.getElementsByTagName('img')[0];
  image.addEventListener('mouseover', function(){
image.src = "assets/img/st2.jpg";
})
  image.addEventListener('mouseout', function(){
    image.src = "assets/img/st1.jpg";
})
})
