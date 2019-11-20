import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var particlesJS: any;

@Component({
  selector: 'app-suma20',
  templateUrl: './suma20.component.html',
  styleUrls: ['./suma20.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Suma20Component implements OnInit {

  rain = false;
  fire = false;
  closeResult: string;
  numero = 0;
  imagen1 = '';
  imagen2 = '';
  folder = '';
  imagenr = 'assets/res.png';
  num1 = (Math.floor(Math.random() * 20) + 1);
  num2 = (Math.floor(Math.random() * 20) + 1);
  imag =  Math.floor(Math.random() * 3) ;
  res = 0;
  resu: number;
  comodin: number;
  constructor(private modalService: NgbModal) { }
  snd = new Audio('assets/resta1.mp3'); // buffers automatically when created
  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', null);
    // this.snd.play();
    this.azar();
    this.imagenCampo1();
    this.imagenCampo2();
  }
  imagenCampo1() {
    if (this.imag === 1) {
      this.folder = 'apple';
    } else if (this.imag === 2) {
      this.folder = 'car';
    } else {
      this.folder = 'ball';
    }
    this.imagen1 = 'assets/' + this.folder + '/' + this.num1 + '.png';
    return this.imagen1;
  }
  imagenCampo2() {
    if (this.imag === 1) {
      this.folder = 'apple';
    } else if (this.imag === 2) {
      this.folder = 'car';
    } else {
      this.folder = 'ball';
    }
    this.imagen2 = 'assets/' + this.folder + '/' + this.num2 + '.png';
    return this.imagen2;
  }
  azar() {
    this.res = this.num1 + this.num2;
    console.log(this.num1, '+' , this.num2);
    console.log('=', this.res);
  }
  validate() {
    if (this.res === this.resu) {
      this.fire = true;
      if (this.imag === 1) {
        this.folder = 'apple';
      } else if (this.imag === 2) {
        this.folder = 'car';
      } else {
        this.folder = 'ball';
      }
      this.imagenr = 'assets/' + this.folder + '/' + this.res + '.png';
      return [this.imagenr, this.fire];
    } else {
      this.imagenr = 'assets/error.png';
      return this.rain = true;
    }
  }
  openSm(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  sonido() {
    this.snd.play();
  }

}
