import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Step1Page } from '../step1/step1'

@Component({
  selector: 'page-Step2',
  templateUrl: 'Step2.html'
})
export class Step2Page {

  constructor(public navCtrl: NavController) {

  }

  next(){
    this.navCtrl.push(Step1Page);
  }

}
