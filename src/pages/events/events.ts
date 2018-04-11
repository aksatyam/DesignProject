import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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

}
