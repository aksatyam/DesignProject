import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {CoursePage} from '../pages/course/course';
import {QuestionPage} from "../pages/question/question";
import {AddquestionPage} from "../pages/addquestion/addquestion";
import {AnswerPage} from "../pages/answer/answer";
import {AddcommentPage} from "../pages/addcomment/addcomment";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPage } from '../pages/feed/feed';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { SignInPage } from '../pages/signIn/signIn';
import { Step2Page } from '../pages/Step2/Step2';
import { BookDetailsPage } from '../pages/bookDetails/bookDetails';
import { CartPage } from '../pages/cart/cart';
import { AllBookDetailsPage } from '../pages/allBookDetails/allBookDetails';
import { MyAddressPage } from '../pages/myAddress/myAddress';
import { MyOrdersPage } from '../pages/myOrders/myOrders';
import { MyAddressesListPage } from '../pages/myAddressesList/myAddressesList';
import { AddAddressPage } from '../pages/addAddress/addAddress';
import { CheckoutPage } from '../pages/checkout/checkout';
import { MyOrdersDetailsPage } from '../pages/myOrdersDetails/myOrdersDetails';
import { SellUsedBooksPage } from '../pages/sellUsedBooks/sellUsedBooks';
import { MyListedBooksPage } from '../pages/myListedBooks/myListedBooks';
import { MyPayemtHistoryPage } from '../pages/myPayemtHistory/myPayemtHistory';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    SignInPage,
    Step2Page,
    CoursePage,
    QuestionPage,
    AddquestionPage,
    AnswerPage,
    AddcommentPage,
    BookDetailsPage,
    CartPage,
    AllBookDetailsPage,
    MyAddressPage,
    MyOrdersPage,
    MyAddressesListPage,
    AddAddressPage,
    CheckoutPage,
    MyOrdersDetailsPage,
    SellUsedBooksPage,
    MyListedBooksPage,
    MyPayemtHistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    SignInPage,
    Step2Page,
    CoursePage,
    QuestionPage,
    AddquestionPage,
    AnswerPage,
    AddcommentPage,
    BookDetailsPage,
    CartPage,
    AllBookDetailsPage,
    MyAddressPage,
    MyOrdersPage,
    MyAddressesListPage,
    AddAddressPage,
    CheckoutPage,
    MyOrdersDetailsPage,
    SellUsedBooksPage,
    MyListedBooksPage,
    MyPayemtHistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileTransfer,
    FileTransferObject,
    FilePath,
    Camera
  ]
})
export class AppModule {
}
