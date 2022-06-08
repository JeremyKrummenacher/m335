import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rechner',
  templateUrl: './rechner.page.html',
  styleUrls: ['./rechner.page.scss'],
})
export class RechnerPage implements OnInit {

  data: any ={text: ''};
  constructor() { }

  ngOnInit() {
  }

  pushDataText(data: any){
    this.data.text += data;
  }

  clearText(){
    this.data.text = '';
  }
  getResult(){
    // eslint-disable-next-line no-eval
    this.data.text = eval(this.data.text);
  }
}
