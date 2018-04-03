import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AddAddressPage } from '../addAddress/addAddress';

@Component({
  selector: 'page-myAddressesList',
  templateUrl: 'myAddressesList.html'
})

export class MyAddressesListPage {
    constructor(public navCtrl: NavController) {
      
    }

    openAddressForm(){
      console.log('Open Add My Address Form');
      this.navCtrl.push(AddAddressPage);
    }
}
