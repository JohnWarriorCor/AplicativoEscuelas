import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var particlesJS: any;

@Component({
  selector: 'app-suma30',
  templateUrl: './suma30.component.html',
  styleUrls: ['./suma30.component.css']
})
export class Suma30Component implements OnInit {

  // BOTON ASPECTOS - PREGUNTAS
  show = false;
  buttonName = '?';
  //
  rain = false;
  fire = false;
  closeResult: string;
  numero = 0;
  imagen1 = '';
  imagen2 = '';
  folder = '';
  imagenr = 'assets/res.png';
  num1 = (Math.floor(Math.random() * 30) + 1);
  num2 = (Math.floor(Math.random() * 30) + 1);
  res = 0;
  resu: number;
  comodin: number;
  constructor(private modalService: NgbModal) { }
  snd = new Audio('assets/resta1.mp3'); // buffers automatically when created
  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', null);
    // this.snd.play();
    this.azar();
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

  azar() {
    this.res = this.num1 + this.num2;
    console.log(this.num1, '+' , this.num2);
    console.log('=', this.res);
  }
  validate() {
    if (this.res === this.resu) {
      this.fire = true;
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
