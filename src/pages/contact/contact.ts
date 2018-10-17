import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MensagemPage} from '../mensagem/mensagem';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  
  Abrir(){
    this.navCtrl.push(MensagemPage);
  }

}
