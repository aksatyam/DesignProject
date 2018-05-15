import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TraningRegisterationformPage } from '../traning-registerationform/traning-registerationform'

/**
 * Generated class for the CompanydetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-companydetail',
  templateUrl: 'companydetail.html',
})
export class CompanydetailPage {
   public shownGroup = null;
  public diseases = [
    { title: "Android", date: "27 April 2018 - 20 March 2018",price:"2000"},
    { title: "PHP", date: "27 April 2018 - 20 March 2018",price:"2500"},
    { title: "Angular JS", date: "27 April 2018 - 20 March 2018",price:"3000"},
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanydetailPage');
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  registerworkshop(){
    this.navCtrl.push(TraningRegisterationformPage);
  }

}
