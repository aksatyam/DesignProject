import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from "ionic-angular/index";
import { TabsPage } from '../pages/tabs/tabs';
import { SignInPage } from '../pages/signIn/signIn';
import { MyOrdersPage } from '../pages/myOrders/myOrders';
import { MyAddressesListPage } from '../pages/myAddressesList/myAddressesList';
import { MyListedBooksPage } from '../pages/myListedBooks/myListedBooks';
import { MyPayemtHistoryPage } from '../pages/myPayemtHistory/myPayemtHistory';
import { MystuffPage } from '../pages/mystuff/mystuff';
import { InvitePage } from '../pages/invite/invite';
import { ProfilePage } from '../pages/profile/profile';
import { ContributePage } from '../pages/contribute/contribute';
import { EventRegisterformPage } from '../pages/event-registerform/event-registerform';
import { TraningRegisterationformPage } from '../pages/traning-registerationform/traning-registerationform';
import { WorkshopRegisterformPage } from '../pages/workshop-registerform/workshop-registerform';
import { TraningHistoryPage } from '../pages/traning-history/traning-history';
import { WorkshopHistoryPage } from '../pages/workshop-history/workshop-history';
import { EventsHistoryPage } from '../pages/events-history/events-history';


@Component({
  selector: 'app-container',
  templateUrl: 'app.html'

})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
  public pages: Array<{ title: string, MenuText: string, component: any, index: number }>;
  private router = [];

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.initializeApp();
      statusBar.styleDefault();
      // let status bar overlay webview
      statusBar.overlaysWebView(true);
     
      splashScreen.hide();
       // set status bar to white
       statusBar.backgroundColorByHexString('#483D83');
    });
  }

  initializeApp() {
    this.router =
      [
        { title: 'My Notes', component: MystuffPage, ImageName:'mynotes.png' ,index: 0 },
        { title: 'My Questions', component: MystuffPage, ImageName:'myquestions.png', index: 1 },
        { title: 'My Answers', component: MystuffPage,ImageName:'myanswers.png', index: 2 },
        { title: 'Address Book', component: MyAddressesListPage,ImageName:'addressbook.png', index: 3 },
        { title: 'Order History', component: MyOrdersPage,ImageName:'Orderhistory.png', index: 4 },
        { title: 'My Listed Books', component: MyListedBooksPage,ImageName:'listedbooks.png', index: 5 },
        { title: 'Received Orders', component: MyPayemtHistoryPage,ImageName:'receivedOrders.png', index: 6 },
        { title: 'Training History ', component: MyListedBooksPage,ImageName:'trainingHistory.png', index: 7 },
        { title: 'Workshops History', component: MyPayemtHistoryPage,ImageName:'workshopsHistory.png', index: 8 },
        { title: 'Registered Event', component: MyPayemtHistoryPage,ImageName:'registeredEvents.png', index: 9 },
        { title: 'Invite friends', component: InvitePage,ImageName:'invite.png', index: 10 },
        { title: 'Tranning Register', component: TraningRegisterationformPage, index: 11 },
        { title: 'Workshops Register', component: WorkshopRegisterformPage, index: 12 },
        { title: 'Traning History', component: TraningHistoryPage, index: 13 },
        { title: 'Workshops History', component: WorkshopHistoryPage, index: 14 },
        { title: 'Events History', component: EventsHistoryPage, index: 15 },
        { title: 'SignIn', component: SignInPage, index: 16}
      ]
    this.pages = this.router;
  }

  openPage(page) {
    this.nav.push(page.component);
  }

  openprofile() {
    this.nav.push(ProfilePage);
  }

  opencontribute(){
    this.nav.push(ContributePage);
  }

  // openUserProfile(page) {
  //   this.events.publish('page:called', this.ProfilePage, UserProfileDetailPage);
  //   this.nav.getActiveChildNav().select(0);
  //   //this.nav.getActiveChildNav().setParameter({'index':5});
  // }

}
