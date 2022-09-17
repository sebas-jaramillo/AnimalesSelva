console.log("empezamos")
for(let i = 0; i<document.querySelectorAll("button").length;i++){

 console.log(i);
  document.querySelectorAll(".boton")[i].addEventListener("click",function(){

  let claseAnimal = this.className;
  console.log(claseAnimal);
 
  switch (claseAnimal) {
    case "elefante boton":
    let audio = new Audio ("sonidos/elefante-sonido.mp3");
    audio.play()
    break;
    case "boton mico":
    let audio1 = new Audio ("sonidos/mico-sonido.mp3");
    audio1.play()
    break;
    case "boton tigre":
      let audio3 = new Audio ("sonidos/tigre-sonido.mp3");
      audio3.play()
      break;
  
    default:
      break;
  }

  })

}




 