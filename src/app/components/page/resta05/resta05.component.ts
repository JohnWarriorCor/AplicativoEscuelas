import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

declare var particlesJS: any;
=======
>>>>>>> 73d35db6c94745e40c23ce35ffab55610bc04b76

declare var particlesJS: any;
@Component({
  selector: 'app-resta05',
  templateUrl: './resta05.component.html',
  styleUrls: ['./resta05.component.css']
})
export class Resta05Component implements OnInit {
  numero=0;
  imagen = '';
  imagen2 = '';
  num1 = (Math.floor(Math.random() * 5) + 1);
  num2 = (Math.floor(Math.random() * 5) + 1);
  res = 0;
  resultado = 0;
  comodin = 0;
  constructor() { }
  snd = new Audio('assets/resta1.mp3'); // buffers automatically when created
  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', null);
    // this.snd.play();
    this.azar();
    this.imagencampo1();
    this.imagencampo2();

    // return this.imagen;
  }
  /* PARA LA RESTA
  if (this.num1 < this.num2) {
      this.comodin = this.num1;
      this.num1 = this.num2;
      this.num2 = this.comodin;
      return[this.num1, this.num2, this.res];
    }

     
  */
  
 
  myFunc(){
    console.log("function called");
  }

 
  azar() {
    this.res = this.num1 + this.num2;
    console.log(this.num1, '+' , this.num2);
    console.log('=', this.res);
<<<<<<< HEAD
   

  }

  validate(){
    if(this.res === this.resu){
      console.log('bien');
    }
  }

=======
  }
  respuesta(num) {
    console.log(num);
    console.log(this.res);
    num = parseInt(num, 10);
    if (this.res === num) {
      console.log('Acierto');
    } else {
      console.log('Error');
    }
  }
>>>>>>> 73d35db6c94745e40c23ce35ffab55610bc04b76
  imagencampo1() {
    switch (this.num1) {
      case 1:
        this.imagen = 'assets/unocarro.png';
        break;
      case 2:
        this.imagen = 'assets/doscarro.png';
        break;
      case 3:
        this.imagen = 'assets/trescarro.png';
        break;
      case 4:
        this.imagen = 'assets/cuatrocarro.png';
        break;
      case 5:
        this.imagen = 'assets/cincocarro.png';
        break;
    }
    return this.imagen;
  }
  imagencampo2() {
    switch (this.num2) {
    case 1:
      this.imagen2 = 'assets/unocarro.png';
      break;
    case 2:
      this.imagen2 = 'assets/doscarro.png';
      break;
    case 3:
      this.imagen2 = 'assets/trescarro.png';
      break;
    case 4:
      this.imagen2 = 'assets/cuatrocarro.png';
      break;
    case 5:
      this.imagen2 = 'assets/cincocarro.png';
      break;
    }
    return this.imagen2;
  }
  sonido() {
    this.snd.play();
  }
}
