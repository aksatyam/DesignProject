import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-myPayemtHistory',
  templateUrl: 'myPayemtHistory.html'
})
export class MyPayemtHistoryPage {
 
  public cardArray:any=[
    {
      'book_name':'OOP with C++',
      'selling_price':300,
      'commision_charges':30,
      'orderStatus':'Delivered',
      'payment_status':'Paid',
      'orderID':'GR958745621',
      'receivable_amount':270
    },
    {
      'book_name':'OOP with C++',
      'selling_price':300,
      'commision_charges':30,
      'orderStatus':'Delivered', 
      'payment_status':'Paid',  
      'orderID':'GR958745621',
      'total_areceivable':270
    },
    {
      'book_name':'OOP with C++',
      'selling_price':300,
      'commision_charges':30,
      'orderStatus':'Delivered',
      'payment_status':'Paid',
      'orderID':'GR958745621',
      'receivable_amount':270
    },
    {
      'book_name':'OOP with C++',
      'selling_price':300,
      'commision_charges':30,
      'orderStatus':'Delivered',  
      'payment_status':'Paid',  
      'orderID':'GR958745621',
      'total_areceivable':270
    },
    {
      'book_name':'OOP with C++',
      'selling_price':300,
      'commision_charges':30,
      'orderStatus':'Delivered',
      'payment_status':'Paid',
      'orderID':'GR958745621',
      'receivable_amount':270
    }
    ];

  constructor(public navCtrl: NavController) {
      console.log(this.cardArray);
  }

}