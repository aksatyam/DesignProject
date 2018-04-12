import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { AddcommentPage } from '../addcomment/addcomment'



@Component({
  selector: 'page-mystuff',
  templateUrl: 'mystuff.html',
})
export class MystuffPage {
 @ViewChild('requestSlides') slides:Slides;
 public selectNotes:boolean=true;
  public selectQuestion:boolean=false;
  public selectAnswer:boolean=false;
  public slideindex:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MystuffPage');
  }

   slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    
    if(currentIndex==1){
      this.selectNotes=false;
      this.selectQuestion=true;  
      this.selectAnswer=false;  
     
      this.slideindex = currentIndex;
    }else if(currentIndex==0){
      this.selectNotes=true;
      this.selectQuestion=false;
      this.selectAnswer=false;  

      this.slideindex = currentIndex;
    }else if(currentIndex==2){
       this.selectNotes=false;
      this.selectQuestion=false;  
      this.selectAnswer=true; 

      this.slideindex = currentIndex;
    }

  }


   openNotes(){
      this.selectNotes=true;
      this.selectQuestion=false;
      this.selectAnswer=false; 
    
    this.slides.slideTo(0);
  }

  openQuestion(){
      this.selectNotes=false;
      this.selectQuestion=true;
      this.selectAnswer=false; 

    this.slides.slideTo(1);
  }

   openAnswer(){
      this.selectNotes=false;
      this.selectQuestion=false;
      this.selectAnswer=true; 

    this.slides.slideTo(2);
  }

  edit(){
    this.navCtrl.push(AddcommentPage);
  }
}
