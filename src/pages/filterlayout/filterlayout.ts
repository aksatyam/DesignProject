import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilterlayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-filterlayout',
  templateUrl: 'filterlayout.html',
})
export class FilterlayoutPage {

   public header:any;
   public sortvalue:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.header=this.navParams.get('title');
    console.log("title value",this.header);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterlayoutPage');
  }
  hello(){
    console.log("radio value",this.sortvalue);
  }

}
