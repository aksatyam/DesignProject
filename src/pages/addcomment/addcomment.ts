import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddcommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addcomment',
  templateUrl: 'addcomment.html',
})
export class AddcommentPage {
  public istext:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.istext="1"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcommentPage');
  }
  setTextmode(){
  this.istext="1";
  }
  setImageMode(){
  this.istext="0";
  }

}
