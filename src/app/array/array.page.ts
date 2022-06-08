import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.page.html',
  styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {
  fruechte: any[] = [
    {name:'Orange', imgURL: 'https://www.brillen-sehhilfen.de/optik/image/orange-frucht.jpg'},
    {name:'Banane', imgURL: 'https://www.coop.ch/img/produkte/737_737/RGB/6495669_001.jpg?_=1586841387487'},
    {name:'Apfel', imgURL: 'https://www.swissfruit.ch/wp-content/uploads/2021/06/primerouge.jpg'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
