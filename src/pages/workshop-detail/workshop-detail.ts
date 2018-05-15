import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkshopRegisterformPage } from '../workshop-registerform/workshop-registerform'

/**
 * Generated class for the WorkshopDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-workshop-detail',
  templateUrl: 'workshop-detail.html',
})
export class WorkshopDetailPage {
   public shownGroup = null;
  public diseases = [
    { title: "Android", date: "27 April 2018 - 20 March 2018",price:"2000"},
    { title: "PHP", date: "27 April 2018 - 20 March 2018",price:"2500"},
    { title: "Angular JS", date: "27 April 2018 - 20 March 2018",price:"3000"},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkshopDetailPage');
  }

  registernow(){
    this.navCtrl.push(WorkshopRegisterformPage)
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
    this.navCtrl.push(WorkshopRegisterformPage);
  }
  

}
