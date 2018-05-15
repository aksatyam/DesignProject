import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { EventRegisterformPage } from '../event-registerform/event-registerform'
/**
 * Generated class for the EventdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-eventdetail',
  templateUrl: 'eventdetail.html',
})
export class EventdetailPage {
@ViewChild(Slides) slides: Slides;
  public shownGroup = null;
  public artistArray: any = [
    {
      id: '1',
      title: 'Slide 1',
      img: 'assets/icon/unnamed.png'
    },
    {
      id: '2',
      title: 'Slide 2',
      img: 'assets/icon/unnamed.png'
    },
    {
      id: '3',
      title: 'Slide 3',
      img: 'assets/icon/unnamed.png'
    },
    {
      id: '4',
      title: 'Slide 4',
      img: 'assets/icon/unnamed.png'
    }
  ];

  public diseases = [
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

   goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  registernow(){
    this.navCtrl.push(EventRegisterformPage);
  }

}
