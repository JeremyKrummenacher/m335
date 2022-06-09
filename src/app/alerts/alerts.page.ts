import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  nickname: string = '';
  canbeseen: boolean = false;
  counter: number = 0;
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Type in your nickname',
      inputs: [{
        name: 'nickname',
        type: 'text',
        placeholder: 'Nickname'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Ok',
          role: 'ok',
          handler: data => {
            this.canbeseen = true;
            this.nickname = data.nickname;
          }
        }
      ],
    });
    await alert.present();
  }

  press(){
    this.counter += 1;
  }
}
