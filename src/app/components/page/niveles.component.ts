import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css']
})
export class NivelesComponent implements OnInit {
  hover1 = false;
  hover2 = false;
  hover3 = false;
  hover4 = false;
  hover5 = false;
  hover6 = false;
  hover7 = false;
  hover8 = false;
  hover9 = false;
  constructor() { }

  ngOnInit() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // tslint:disable-next-line:only-arrow-functions
    particlesJS.load('particles-js', 'assets/data/particles.json', null);
  }

}
