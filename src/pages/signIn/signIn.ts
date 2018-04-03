import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Step2Page } from '../Step2/Step2';

@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html'
})
export class SignInPage {

  constructor(public navCtrl: NavController) {

  }

  nextPage(){
    this.navCtrl.push(Step2Page);
  }


}
