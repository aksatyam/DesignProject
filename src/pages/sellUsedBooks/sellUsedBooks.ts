import { Component } from '@angular/core';
import { NavController,ActionSheetController,ToastController,LoadingController,Platform } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';

declare var cordova: any;

@Component({
  selector: 'page-sellUsedBooks',
  templateUrl: 'sellUsedBooks.html'
})
export class SellUsedBooksPage {
  lastImage: string = null;
  constructor(  public navCtrl: NavController,
                public camera:Camera,
                public actionSheetCtrl: ActionSheetController, 
                public toastCtrl: ToastController, 
                public platform: Platform, 
                public loadingCtrl: LoadingController, public filepath:FilePath,public file:File) {

  }


  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
  // Create options for the Camera Dialog
    var options = {
                    quality: 100,
                    sourceType: sourceType,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                  };

    this.camera.getPicture(options).then(imagepath=>{
      if(this.platform.is('android') && sourceType===this.camera.PictureSourceType.PHOTOLIBRARY){
        this.filepath.resolveNativePath(imagepath).then(path=>{
          let correctPath = path.substr(0, path.lastIndexOf('/') + 1);
          let currentName = path.substring(imagepath.lastIndexOf('/') + 1, imagepath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        })
      }
      else{
        var currentName = imagepath.substr(imagepath.lastIndexOf('/') + 1);
      var correctPath = imagepath.substr(0, imagepath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    },(err)=>{
      this.presentToast('Error while selecting image.');
    });
  }


  // Create a new name for the image
private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
}
 
// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
  }, error => {
    this.presentToast('Error while storing file.');
  });
}
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
}
