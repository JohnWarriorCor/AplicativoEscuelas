import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor() { }
  sound = new Audio('assets/fondo.mp3'); // buffers automatically when created
  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', null);
    this.sound.loop = true;
    this.sound.autoplay = true ;
    this.sound.load();
    this.sound.play();
  }
  stoped() {
    this.sound.pause();
  }
  sonido() {
    const snd = new Audio('assets/Boton1.mp3'); // buffers automatically when created
    snd.play();
    this.sound.pause();
  }
  played() {
    this.sound.loop = true;
    this.sound.autoplay = true ;
    this.sound.load();
  }
}
