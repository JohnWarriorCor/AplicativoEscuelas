import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-resta05',
  templateUrl: './resta05.component.html',
  styleUrls: ['./resta05.component.css']
})
export class Resta05Component implements OnInit {

  constructor() { }
  snd = new Audio('assets/resta1.mp3'); // buffers automatically when created
  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', null);
    this.snd.play();
  }
  sonido() {
    this.snd.play();
  }
}
