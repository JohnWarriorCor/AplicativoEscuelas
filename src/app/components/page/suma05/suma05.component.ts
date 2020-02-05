import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var particlesJS: any;

@Component({
  selector: 'app-suma05',
  templateUrl: './suma05.component.html',
  styleUrls: ['./suma05.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Suma05Component implements OnInit {
  rain = false;
  fire = false;
  closeResult: string;
  numero = 0;
  imagen1 = '';
  imagen2 = '';
  imagen11 = '';
  imagen12 = '';
  folder = '';
  imagenr = 'assets/res.png';
  num1 = (Math.floor(Math.random() * 5) + 1);
  num2 = (Math.floor(Math.random() * 5) + 1);
  imag =  Math.floor(Math.random() * 3) ;
  num11 = this.num1;
  num12 = this.num2;
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
    if (this.num11 === 1){
      this.imagen11 =  'assets/' + this.folder + '/' + 'uno.png';
    } else {
      if (this.num11 === 2){
        this.imagen11 =  'assets/' + this.folder + '/' + 'dos.png';
      } else {
        if (this.num11 === 3){
          this.imagen11 =  'assets/' + this.folder + '/' + 'tresi.png';
        } else {
          if (this.num11 === 4){
            this.imagen11 =  'assets/' + this.folder + '/' + 'cuatro.png';
          } else {
            if (this.num11 === 5){
              this.imagen11 =  'assets/' + this.folder + '/' + 'cinco.png';
            }
          }
        }
      }
    }
    if (this.num12 === 1){
      this.imagen12 =  'assets/' + this.folder + '/' + 'uno.png';
    } else {
      if (this.num12 === 2){
        this.imagen12 =  'assets/' + this.folder + '/' + 'dos.png';
      } else {
        if (this.num12 === 3){
          this.imagen12 =  'assets/' + this.folder + '/' + 'tresi.png';
        } else {
          if (this.num12 === 4){
            this.imagen12 =  'assets/' + this.folder + '/' + 'cuatro.png';
          } else {
            if (this.num12 === 5){
              this.imagen12 =  'assets/' + this.folder + '/' + 'cinco.png';
            }
          }
        }
      }
    }

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
      this.rain = true;
      return [this.rain];
    }
  }
  openSm(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  sonido() {
    this.snd.play();
  }
}
