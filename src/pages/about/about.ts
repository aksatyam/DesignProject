import { Component,ViewChild } from '@angular/core';
import { NavController,Content } from 'ionic-angular';
import { BookDetailsPage } from '../bookDetails/bookDetails';
import { CartPage } from '../cart/cart';
import { AllBookDetailsPage } from '../allBookDetails/allBookDetails';
import { SellUsedBooksPage } from '../sellUsedBooks/sellUsedBooks';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public price:any=283;
  public slideHeader=true;
  public slideHeaderPrevious=0;
  public cardArray:any=['1','2','3','4','5','6','7','8','9','10'];
  @ViewChild(Content) content: Content;
  public scrollAmount = 0;

  constructor(public navCtrl: NavController) {
      
  }

  getItems(event){
    console.log(event);
  }

  scrollHandler(event){
   
  }

  openItemDetails(){
    console.log('item Details in next page');
    this.navCtrl.push(BookDetailsPage);
  }

  addToCart(){
    console.log('Added To Cart');
  }

  seeAllItems(){
    console.log('see All Iems in next page');
    this.navCtrl.push(AllBookDetailsPage);
  }

  openCartPage(){
    console.log('open cart page in next page');
    this.navCtrl.push(CartPage);
  }

  OpenBookForm(){
    this.navCtrl.push(SellUsedBooksPage);
  }
}
