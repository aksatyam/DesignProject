import { Component,ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { EventdetailPage } from '../eventdetail/eventdetail'
import { FilterlayoutPage } from '../filterlayout/filterlayout'
import { NotificationPage } from '../notification/notification'

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  @ViewChild('requestSlides') slides:Slides;
  public selectInCampus:boolean=true;
  public selectOutCampus:boolean=false;
  public slideindex:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    
    if(currentIndex==1){
      this.selectInCampus=false;
      this.selectOutCampus=true;  
     
      this.slideindex = currentIndex;
    }else if(currentIndex==0){
      this.selectInCampus=true;
      this.selectOutCampus=false;

      this.slideindex = currentIndex;
    }

  }

  openInCampus(){
    this.selectInCampus=true;
    this.selectOutCampus=false;
    
    this.slides.slideTo(0);
  }

  openOutCampus(){
    this.selectInCampus=false;
    this.selectOutCampus=true;

    this.slides.slideTo(1);
  }

  register(){
    this.navCtrl.push(EventdetailPage);
  }

  filterclick(title){
    this.navCtrl.push(FilterlayoutPage,{'title':title});
  }

   notification(){
    this.navCtrl.push(NotificationPage);
  }
}
