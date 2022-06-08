import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zahlen',
  templateUrl: './zahlen.page.html',
  styleUrls: ['./zahlen.page.scss'],
})
export class ZahlenPage implements OnInit {
  anyVar: any = 5;
  zahl1 = 0;
  constructor() { }

  ngOnInit() {
  }

}
