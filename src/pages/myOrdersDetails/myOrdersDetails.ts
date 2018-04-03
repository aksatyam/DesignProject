import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-myOrdersDetails',
  templateUrl: 'myOrdersDetails.html'
})

export class MyOrdersDetailsPage {
  public price:any=525;
  public count:number;
  public colodDemo:string='white';
  public cardArray:any=[
    {
      'product_title':'Super Store - Gurgaon',
      'price':525,
      'delivery_charges':50,
      'freeDelevery':'FREE',
      'orderID':'GR958745621',
      'total_amount':850,
      'quantity':1
    },
    {
      'product_title':'Super Store - Gurgaon',
      'price':525,
      'delivery_charges':50,
      'freeDelevery':0,
      'orderID':'GR958745621',
      'total_amount':850,
      'quantity':1
    },
    {
      'product_title':'Super Store - Gurgaon',
      'price':525,
      'delivery_charges':50,
      'freeDelevery':'FREE',
      'orderID':'GR958745621',
      'total_amount':850,
      'quantity':1
    },
    {
      'product_title':'Super Store - Gurgaon',
      'price':525,
      'delivery_charges':50,
      'freeDelevery':0,
      'orderID':'GR958745621',
      'total_amount':850,
      'quantity':1
    },
    {
      'product_title':'Super Store - Gurgaon',
      'price':525,
      'delivery_charges':50,
      'freeDelevery':'FREE',
      'orderID':'GR958745621',
      'total_amount':850,
      'quantity':1
    },
    {
      'product_title':'Super Store - Gurgaon',
      'price':525,
      'delivery_charges':50,
      'freeDelevery':'FREE',
      'orderID':'GR958745621',
      'total_amount':850,
      'quantity':1
    }
    ];
    constructor(public navCtrl: NavController) {
      this.count=Object.keys(this.cardArray).length;
    }
}