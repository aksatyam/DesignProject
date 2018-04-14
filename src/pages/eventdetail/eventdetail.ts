import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-eventdetail',
  templateUrl: 'eventdetail.html',
})
export class EventdetailPage {
  public shownGroup = null;
 public  diseases = [
    { title: "Terms And Conditions", description: " I followed ionic doc, but I can not find out their source code for the demo, for example. What I need is to put icon to the far end of the row, but when I load the page, the icon is only to the right of the content, not float to the right of the whole row." }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdetailPage');
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

 }
