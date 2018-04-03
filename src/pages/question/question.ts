import {Component,ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { AddquestionPage } from '../addquestion/addquestion'
import {AnswerPage} from "../answer/answer";
import { Slides } from 'ionic-angular';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  @ViewChild('requestSlides') slides:Slides;
  public selectTopic:boolean=true;
  public selectQuestionBank:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  openTopicList(){
    this.selectTopic=true;
    this.selectQuestionBank=false;
    
    this.slides.slideTo(0);
  }

  openQuestionBank(){
    this.selectTopic=false;
    this.selectQuestionBank=true;

    this.slides.slideTo(1);
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    
    if(currentIndex==1){
      this.selectTopic=false;
      this.selectQuestionBank=true;  
      console.log(JSON.stringify(currentIndex));
    }else if(currentIndex==0){
      this.selectTopic=true;
      this.selectQuestionBank=false;
      console.log(JSON.stringify(currentIndex));
    }

  }

  addques(){
    this.navCtrl.push(AddquestionPage);
  }
  comment(){
   this.navCtrl.push(AnswerPage);
 }

 

}
