import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var particlesJS: any;

@Component({
  selector: 'app-resta80',
  templateUrl: './resta80.component.html',
  styleUrls: ['./resta80.component.css']
})

export class Resta80Component implements OnInit {
  
    // BOTON ASPECTOS - PREGUNTAS
    show = false;
    buttonName = '?';
    //
  rain = false;
  fire = false;
  numero = 0;
  imagen1 = '';
  imagen2 = '';
  folder = '';
  imagenr = 'assets/res.png';
  num1 = (Math.floor(Math.random() * 80) + 1);
  num2 = (Math.floor(Math.random() * 80) + 1);
  imag =  Math.floor(Math.random() * 3) ;
  res = 0;
  resu: number;
  comodin: number;
  constructor(private modalService: NgbModal) {  }
  snd = new Audio('assets/resta1.mp3'); // buffers automatically when created
  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', null);
    // this.snd.play();
    this.azar();
    this.imagenCampo1();
    this.imagenCampo2();
    // this.carga();
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      // tslint:disable-next-line:max-line-length
      this.buttonName = '<input autocomplete="off" min="0" max="10" name="resultado" [(ngModel)]="resu" type="number" class="form-control text-center" id="inputCity" style="margin-top: 20px;font-size: 58px;color: black;">';
    } else {
      this.buttonName = '<h1 class="tuclase text-center">?</h1>';
    }
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
    if (this.num1 < this.num2) {
      this.comodin = this.num1;
      this.num1 = this.num2;
      this.num2 = this.comodin;
      this.res = this.num1 - this.num2;
      return[this.num1, this.num2, this.res];
    }
    this.res = this.num1 - this.num2;
    console.log(this.num1, '-' , this.num2);
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
      this.rain = true;
      this.imagenr = 'assets/error.png';
      return [this.rain, this.imagenr];
    }
  }
  openSm(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
  sonido() {
    this.snd.play();
  }
}
