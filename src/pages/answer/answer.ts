import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddcommentPage} from "../addcomment/addcomment";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnswerPage');
  }

  replycomment(){
    this.navCtrl.push(AddcommentPage);
  }

}
