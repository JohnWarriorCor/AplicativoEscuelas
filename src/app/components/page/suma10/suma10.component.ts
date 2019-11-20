import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var particlesJS: any;

@Component({
  selector: 'app-suma10',
  templateUrl: './suma10.component.html',
  styleUrls: ['./suma10.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Suma10Component implements OnInit {
  rain = false;
  fire = false;
  closeResult: string;
  numero = 0;
  imagen1 = '';
  imagen2 = '';
  folder = '';
  imagenr = 'assets/res.png';
  num1 = (Math.floor(Math.random() * 5) + 1);
  num2 = (Math.floor(Math.random() * 5) + 1);
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

  azar() {
    this.res = this.num1 + this.num2;
    console.log(this.num1, '+' , this.num2);
    console.log('=', this.res);
  }
  validate() {
    if (this.res === this.resu) {
      this.fire = true;
      this.imagenr = 'assets/' + this.res + '.png';
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
