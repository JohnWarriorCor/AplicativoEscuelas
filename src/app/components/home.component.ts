import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // tslint:disable-next-line:only-arrow-functions
    particlesJS.load('particles-js', 'assets/data/particles.json', null);
  }
  sonido() {
    const snd = new Audio('assets/instrucciones.mp3'); // buffers automatically when created
    snd.play();
  }
}
