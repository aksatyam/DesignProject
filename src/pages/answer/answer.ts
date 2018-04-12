import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { AddcommentPage} from "../addcomment/addcomment";
import { InvitePage} from "../invite/invite";
import { ContentreadPage} from "../contentread/contentread";

/**
 * Generated class for the AnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html',
})
export class AnswerPage {
  public testRadioOpen:boolean=true;
  public testRadioResult:any;
  public isimg:any;
  public isnotes:any;
  public isfab:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad AnswerPage');
  }

  invite(){
    this.navCtrl.push(InvitePage);
  }

  addques(){
    this.navCtrl.push(AddcommentPage);
  }

  readcontent(){
    this.isimg="1";
    this.isnotes="1";
    this.isfab="0";
    this.navCtrl.push(ContentreadPage,{'isimage':this.isimg,'isnotes':this.isnotes,'isfab':this.isfab});
  }
   readcontentimg(){
    this.isimg="0";
    this.isnotes="1";
    this.isfab="0";
    this.navCtrl.push(ContentreadPage,{'isimage':this.isimg,'isnotes':this.isnotes,'isfab':this.isfab});
  }

  showRadio() {
    let alert = this.alertCtrl.create({
            title: 'Report this post'
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
