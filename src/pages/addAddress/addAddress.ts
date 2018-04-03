import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-addAddress',
  templateUrl: 'addAddress.html'
})

export class AddAddressPage {
    buttonColor1: string = '#f4f4f4'; //Default Color
    buttonColor2: string = '#f4f4f4'; //Default Color
    buttonColor3: string = '#f4f4f4'; //Default Color
    textColor1:string = '#483D83';
    textColor2:string = '#483D83';
    textColor3:string = '#483D83';  
    public addressType = '';
    public othersStatus:boolean=false;
    constructor(public navCtrl: NavController) {
      
    }

    addEvent(value){
      console.log(value);
      if(value==1){
        this.buttonColor1 = '#483D83'; //desired Color 
        this.buttonColor2 = '#f4f4f4'; 
        this.buttonColor3 = '#f4f4f4'; 

        this.textColor1 = '#ffffff';
        this.textColor2 = '#483D83';
        this.textColor3 = '#483D83';

        this.othersStatus = false;
        this.addressType = "Home";
      }
      else if(value==2){
        this.buttonColor1 = '#f4f4f4';
        this.buttonColor2 = '#483D83'; //desired Color
        this.buttonColor3 = '#f4f4f4'; 

        this.textColor1 = '#483D83';
        this.textColor2 = '#ffffff';
        this.textColor3 = '#483D83';

        this.othersStatus = false;
        this.addressType = "Office";    
      }
      else if(value==3){
        this.buttonColor1 = '#f4f4f4';
        this.buttonColor2 = '#f4f4f4'; 
        this.buttonColor3 = '#483D83'; //desired Color 

        this.textColor1 = '#483D83';
        this.textColor2 = '#483D83';
        this.textColor3 = '#ffffff';

        this.othersStatus=true;        
      }
    }

}
