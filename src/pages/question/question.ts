import {Component,ViewChild} from '@angular/core';
import {NavController, NavParams,AlertController} from 'ionic-angular';
import {AnswerPage} from "../answer/answer";
import {AddcommentPage} from "../addcomment/addcomment";
import { Slides } from 'ionic-angular';
import { ContentreadPage} from "../contentread/contentread";

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
  public slideindex:any;
  public testRadioOpen:boolean=true;
  public testRadioResult:any;
  public isimg:any;
  public isnotes:any;
  public isfab:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
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
     
      this.slideindex = currentIndex;
    }else if(currentIndex==0){
      this.selectTopic=true;
      this.selectQuestionBank=false;

      this.slideindex = currentIndex;
    }

  }

  addques(){
    this.navCtrl.push(AddcommentPage);
  }
  comment(){
   this.navCtrl.push(AnswerPage);
 }

  readcontent(){
    this.isimg="1";
    this.isnotes="0";
    this.isfab="1";
    this.navCtrl.push(ContentreadPage,{'isimage':this.isimg,'isnotes':this.isnotes,'isfab':this.isfab});
  }
   readcontentimg(){
    this.isimg="0";
    this.isnotes="0";
    this.isfab="1";
    this.navCtrl.push(ContentreadPage,{'isimage':this.isimg,'isnotes':this.isnotes,'isfab':this.isfab});
  }

  showRadio() {
    let alert = this.alertCtrl.create({
            title: 'Report this post',
            cssClass: 'my-alert'
          });
    alert.addInput({
      type: 'radio',
      label: 'Abusive Content',
      value: 'Abusive Content',
      checked: true
    });

     alert.addInput({
      type: 'radio',
      label: 'Out OF Syllabus',
      value: 'Out OF Syllabus',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Grammatical Mistakes',
      value: 'Grammatical Mistakes',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Submit',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

}
