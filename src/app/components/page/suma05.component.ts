import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-suma05',
  templateUrl: './suma05.component.html',
  styleUrls: ['./suma05.component.css']
})
export class Suma05Component implements OnInit {
numero = 0;
imagen = '';
imagen2 = '';
imagenr = 'assets/res.png';
num1 = (Math.floor(Math.random() * 5) + 1);
num2 = (Math.floor(Math.random() * 5) + 1);
res = 0;
resu: number;
comodin: number;
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

/*
myFunc(){
  console.log("function called");
}

*/
azar() {
  this.res = this.num1 + this.num2;
  console.log(this.num1, '+' , this.num2);
  console.log('=', this.res);


}

validate() {
  if (this.res === this.resu) {
    console.log('bien');
  }
  switch (this.resu) {
    case 0:
      this.imagenr = 'assets/ceroresta.png';
      break;
    case 1:
      this.imagenr = 'assets/unocarro.png';
      break;
    case 2:
      this.imagenr = 'assets/doscarro.png';
      break;
    case 3:
      this.imagenr = 'assets/trescarro.png';
      break;
    case 4:
      this.imagenr = 'assets/cuatrocarro.png';
      break;
    case 5:
      this.imagenr = 'assets/cincocarro.png';
      break;
      case 6:
      this.imagenr = 'assets/seiscarro.png';
      break;
      case 7:
      this.imagenr = 'assets/sietecarro.png';
      break;
      case 8:
      this.imagenr = 'assets/ochocarro.png';
      break;
      case 9:
      this.imagenr = 'assets/nuevecarro.png';
      break;
      case 10:
      this.imagenr = 'assets/diezcarro.png';
      break;
  }
  return this.imagenr;

}

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
