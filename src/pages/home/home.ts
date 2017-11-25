import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private sms: SMS) {

  }

  sendSMS(){
    this.sms.send('+5517997631965', 'Hello world!');
  }

}
