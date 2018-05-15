import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { FilterlayoutPage } from '../filterlayout/filterlayout'
import { CompanydetailPage } from '../companydetail/companydetail'
import { WorkshopDetailPage } from '../workshop-detail/workshop-detail'
import { NotificationPage } from '../notification/notification'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public slideArray:any=[
                          {
                            id:'1',
                            title:'Slide 1',
                            img:'assets/icon/unnamed.png'
                          },
                          {
                            id:'2',
                            title:'Slide 2',
                            img:'assets/icon/unnamed.png'
                          },
                          {
                            id:'3',
                            title:'Slide 3',
                            img:'assets/icon/unnamed.png'
                          },
                          {
                            id:'4',
                            title:'Slide 4',
                            img:'assets/icon/unnamed.png'
                          },
                          {
                            id:'5',
                            title:'Slide 5',
                            img:'assets/icon/unnamed.png'
                          },
                          {
                            id:'6',
                            title:'Slide 6',
                            img:'assets/icon/unnamed.png'
                          }
                        ];
    public tabsTitle:any="1";
    @ViewChild('headerSlide') headerSlide:Slides;
    @ViewChild('contentSlide') contentSlide:Slides;
    public activeIndex:any;
  constructor(public navCtrl: NavController) {
    this.tabsTitle="1";
  }

  headerSlideChanged(){
    console.log(this.headerSlide.getActiveIndex());
    if(this.headerSlide.getActiveIndex()==0){
      this.tabsTitle="1";
    }else{
      this.tabsTitle="2";
      this.headerSlide.slideTo(1);
    }
  }

  contentSlideChanged(){
    //console.log(this.contentSlide.getActiveIndex());
  }

  segmentChanged(){
    console.log(this.tabsTitle);
    if(this.tabsTitle=="1"){
      this.headerSlide.slideTo(0);
    }else{
      this.headerSlide.slideTo(1);
    }
  }

   
  filterclick(title){
    this.navCtrl.push(FilterlayoutPage,{'title':title});
  }

  viewcourse(){
    this.navCtrl.push(CompanydetailPage);
  }
  workshopdetail(){
    this.navCtrl.push(WorkshopDetailPage);
  }

   notification(){
    this.navCtrl.push(NotificationPage);
  }
}
