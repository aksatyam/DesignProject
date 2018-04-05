import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';

@Component({
    selector: 'page-allBookDetails',
    templateUrl: 'allBookDetails.html'
  })
  export class AllBookDetailsPage {
    public title:any="First Semester";
    public cardArray:any=[
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                          {
                            'book_name':'Object Oriented Programming with C++',
                            'quantity':'1Pc',
                            'price':'325'
                          },
                        ];
  
  
    constructor(public navCtrl: NavController) {
        
    }

    openCartPage(){
      console.log('open cart page in next page');
      this.navCtrl.push(CartPage);
    }
}
  