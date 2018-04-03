import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MyAddressesListPage } from '../myAddressesList/myAddressesList';

@Component({
  selector: 'page-myAddress',
  templateUrl: 'myAddress.html'
})

export class MyAddressPage {
    constructor(public navCtrl: NavController) {
      
    }

    addAddressPage(){
      console.log('Open Addresses List Page');
      this.navCtrl.push(MyAddressesListPage);
    }
}
