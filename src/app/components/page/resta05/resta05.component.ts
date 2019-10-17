import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-resta05',
  templateUrl: './resta05.component.html',
  styleUrls: ['./resta05.component.css']
})
export class Resta05Component implements OnInit {
  imagen = '';
  imagen2 = '';
  num1 = (Math.floor(Math.random() * 5) + 1);
  num2 = (Math.floor(Math.random() * 5) + 1);
  res = 0;
  comodin: number;
  constructor() { }
  snd = new Audio('assets/resta1.mp3'); // buffers automatically when created
  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', null);
    // this.snd.play();
    if (this.num1 < this.num2) {
      this.comodin = this.num1;
      this.num1 = this.num2;
      this.num2 = this.comodin;
      return[this.num1, this.num2, this.res];
    }
    this.res = this.num1 + this.num2;
    console.log(this.num1, '+' , this.num2);
    console.log('=', this.res);

    // return this.imagen;

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

  }
  sonido() {
    this.snd.play();
  }
}
