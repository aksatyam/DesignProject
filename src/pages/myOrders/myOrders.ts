import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MyOrdersDetailsPage } from '../myOrdersDetails/myOrdersDetails';

@Component({
  selector: 'page-myOrders',
  templateUrl: 'myOrders.html'
})

export class MyOrdersPage {

    public cardArray:any=[
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':'FREE',
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':0,
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':'FREE',
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':0,
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':'FREE',
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':'FREE',
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':'FREE',
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':0,
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':'FREE',
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':0,
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':0,
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          {
                            'product_title':'Super Store - Gurgaon',
                            'price':525,
                            'delivery_charges':50,
                            'freeDelevery':'FREE',
                            'orderID':'GR958745621',
                            'total_amount':850
                          },
                          ];
    constructor(public navCtrl: NavController) {
      
    }

    orderDetailsPage(){
      console.log('Open Order Details Page');
      this.navCtrl.push(MyOrdersDetailsPage);
    }
}
