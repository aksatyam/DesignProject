import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-bookDetails',
  templateUrl: 'bookDetails.html'
})
export class BookDetailsPage {
  public price:any=283;

  constructor(public navCtrl: NavController) {
      
  }

  openCartPage(){
    console.log('open cart page...');
    this.navCtrl.push(CartPage);
  }

  addToCart(){
    console.log('add to cart');
  }
}