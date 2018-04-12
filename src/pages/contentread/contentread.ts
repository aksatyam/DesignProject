import { Component,ViewChild  } from '@angular/core';
import { NavController, NavParams,AlertController,Slides  } from 'ionic-angular';
import { AddcommentPage} from "../addcomment/addcomment";
import { InvitePage} from "../invite/invite";
import { ImageViewerController } from "ionic-img-viewer";



@Component({
  selector: 'page-contentread',
  templateUrl: 'contentread.html',
})
export class ContentreadPage {
  @ViewChild(Slides) slides: Slides;
  public testRadioOpen:boolean=true;
  public testRadioResult:any;
  public contentType:any;
  public isnotesdata:any;
  public isfabdata:any;
  public imageslide=['questioncard.jpg','questioncard.jpg','questioncard.jpg'];
  public _imageViewerCtrl: ImageViewerController;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public imageViewerCtrl: ImageViewerController ) {
    this.contentType=this.navParams.get('isimage');
    this.isnotesdata=this.navParams.get('isnotes');
    this.isfabdata=this.navParams.get('isfab');
    console.log("isnotes value",this.isnotesdata);
    this._imageViewerCtrl = imageViewerCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentreadPage');
  }
    presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    // setTimeout(() => imageViewer.dismiss(), 1000);
    // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }

  invite(){
    this.navCtrl.push(InvitePage);
  }

  addques(){
    this.navCtrl.push(AddcommentPage);
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
   slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
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
