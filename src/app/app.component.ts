import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Events} from "ionic-angular/index";
import { TabsPage } from '../pages/tabs/tabs';
import { SignInPage } from '../pages/signIn/signIn';
import { MyOrdersPage } from '../pages/myOrders/myOrders';
import { MyAddressesListPage } from '../pages/myAddressesList/myAddressesList';
import { MyListedBooksPage } from '../pages/myListedBooks/myListedBooks';
import { MyPayemtHistoryPage } from '../pages/myPayemtHistory/myPayemtHistory';

@Component({
  selector: 'app-container',
  templateUrl: 'app.html'
  
})
export class MyApp {

  @ViewChild(Nav) nav:Nav;
  rootPage:any = TabsPage;
  public pages:Array<{title: string,MenuText:string, component: any,index:number}>;
  private router = [];

  constructor(  platform: Platform, 
                statusBar: StatusBar, 
                splashScreen: SplashScreen,
                public events:Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.initializeApp();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initializeApp(){
    this.router =
    [
      {title: 'SignIn', component: SignInPage, index: 0},
      {title: 'My Address', component: MyAddressesListPage, index: 1},
      {title: 'My Orders', component: MyOrdersPage, index: 2},  
      {title: 'My Listed Books', component: MyListedBooksPage, index: 3},     
      {title: 'My Payment History', component: MyPayemtHistoryPage, index: 4},                  
    ]
    this.pages=this.router;
   
  }


  openPage(page){
    this.nav.push(page.component);
  }

}
