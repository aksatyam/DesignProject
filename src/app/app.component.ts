import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Events} from "ionic-angular/index";
import { TabsPage } from '../pages/tabs/tabs';
import { MyOrdersPage } from '../pages/myOrders/myOrders';
import { MyAddressesListPage } from '../pages/myAddressesList/myAddressesList';
import { MyListedBooksPage } from '../pages/myListedBooks/myListedBooks';
import { MyPayemtHistoryPage } from '../pages/myPayemtHistory/myPayemtHistory';
import { MystuffPage } from '../pages/mystuff/mystuff';
import { InvitePage } from '../pages/invite/invite';


@Component({
  selector: 'app-container',
  templateUrl: 'app.html'
  
})
export class MyApp {

  @ViewChild(Nav) nav:Nav;
  rootPage:any = TabsPage;
  public pages1:Array<{title: string,MenuText:string, component: any,index:number}>;
  public pages2:Array<{title: string,MenuText:string, component: any,index:number}>;
  public pages3:Array<{title: string,MenuText:string, component: any,index:number}>;
  public pages4:Array<{title: string,MenuText:string, component: any,index:number}>;
  private router1 = [];
  private router2 = [];
  private router3 = [];
  private router4 = [];

  constructor(  platform: Platform, 
                statusBar: StatusBar, 
                splashScreen: SplashScreen,
                public events:Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.initializeApp();
      statusBar.styleDefault();
      // let status bar overlay webview
      statusBar.overlaysWebView(true);
      // set status bar to white
      statusBar.backgroundColorByHexString('#483D83');
      splashScreen.hide();
    });
  }
  
  initializeApp(){
    this.router1 =
    [
      {title: 'My Notes', component: MystuffPage, index: 0},                             
      {title: 'My Questions', component: MystuffPage, index: 1},                             
      {title: 'My Answers', component: MystuffPage, index: 2}                             
    ]
    this.pages1=this.router1;
   
    this.router2 =
    [
      {title: 'Address BooK', component: MyAddressesListPage, index: 3},
      {title: 'Order History', component: MyOrdersPage, index: 4},  
                               
    ]
    this.pages2=this.router2;

     this.router3 =
    [
      {title: 'Listed Books', component: MyListedBooksPage, index: 5},     
      {title: 'Recived Orders', component: MyPayemtHistoryPage, index: 6},    
                                 
    ]
    this.pages3=this.router3;

     this.router4 =
    [
      {title: 'Registered Courses', component: MyListedBooksPage, index: 7},     
      {title: 'Registered WorkShops', component: MyPayemtHistoryPage, index: 8},    
      {title: 'Registered Event', component: MyPayemtHistoryPage, index: 9},   
      {title: 'Invite friend', component: InvitePage, index: 10}   
                                 
    ]
    this.pages4=this.router4;
  }


  openPage(page){
    this.nav.push(page.component);
  }

  openprofile(){
    
  }

}
