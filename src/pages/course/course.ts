import { Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { QuestionPage} from '../question/question';
import { NotificationPage} from '../notification/notification';

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePage');
  }

  next() {
    this.navCtrl.push(QuestionPage);
  }

  notification(){
    this.navCtrl.push(NotificationPage);
  }

}
