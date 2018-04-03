import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})

export class CartPage {
  public isVisible:boolean=false;
  public total_price:any=253;
  public delevery_price:any=53;
  public isVisibleItems:boolean=true;  
  public cardArray:any=[
                        {
                        'title':'OOPS Programming with JAVA',
                        'quantity':'1pc',
                          'price':252,
                          'maxprice':300
                        },
                        {
                          'title':'OOPS Programming with JAVA',
                          'quantity':'1pc',
                          'price':252,
                          'maxprice':300
                        },
                        {
                          'title':'OOPS Programming with JAVA',
                          'quantity':'1pc',
                          'price':250,
                          'maxprice':300
                        },
                        {
                          'title':'OOPS Programming with JAVA',
                          'quantity':'1pc',
                            'price':250,
                            'maxprice':300
                          },
                          {
                            'title':'OOPS Programming with JAVA',
                            'quantity':'1pc',
                            'price':252,
                            'maxprice':300
                          },
                          {
                            'title':'OOPS Programming with JAVA',
                            'quantity':'1pc',
                            'price':252,
                            'maxprice':300
                          },
                          {
                            'title':'OOPS Programming with JAVA',
                            'quantity':'1pc',
                              'price':252,
                              'maxprice':300
                            },
                            {
                              'title':'OOPS Programming with JAVA',
                              'quantity':'1pc',
                              'price':252,
                              'maxprice':300
                            },
                            {
                              'title':'OOPS Programming with JAVA',
                              'quantity':'1pc',
                              'price':250,
                              'maxprice':300
                            },
                            {
                              'title':'OOPS Programming with JAVA',
                              'quantity':'1pc',
                                'price':250,
                                'maxprice':300
                              },
                              {
                                'title':'OOPS Programming with JAVA',
                                'quantity':'1pc',
                                'price':252,
                                'maxprice':300
                              },
                              {
                                'title':'OOPS Programming with JAVA',
                                'quantity':'1pc',
                                'price':252,
                                'maxprice':300
                              }
                      ];
  constructor(public navCtrl: NavController) {
      
  }

  onClickShooping(){
    console.log('Go to Home Page');
      this.isVisible=false;
      this.isVisibleItems=true;
  }

  openCheckout(){
    console.log('Checkout Page Open');
    this.navCtrl.push(CheckoutPage);
  }
}