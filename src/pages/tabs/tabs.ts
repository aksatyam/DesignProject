import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { CoursePage } from '../course/course';
import { EventsPage } from '../events/events';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CoursePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = EventsPage;
  
    constructor() {

  }
}
