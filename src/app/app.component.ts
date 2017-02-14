import { Component, ViewChild } from '@angular/core';
import { Nav, MenuController, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { PageAffluence } from '../pages/page-affluence/page-affluence';
import { PageAide } from '../pages/page-aide/page-aide';
import { PageMesAdmin } from '../pages/page-mes-admin/page-mes-admin';
import { PageMesDemandes } from '../pages/page-mes-demandes/page-mes-demandes';
import { PageMesInfos } from '../pages/page-mes-infos/page-mes-infos';
import { PageMonCompte } from '../pages/page-mon-compte/page-mon-compte';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PageMesAdmin;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public menu: MenuController) {
    this.initializeApp();

    this.pages = [
      { title: 'Mes Administrations', component: PageMesAdmin },
      { title: 'Mes demandes', component: PageMesDemandes },
      { title: 'Mon compte', component:  PageMonCompte},
      { title: 'Aide', component:  PageAide}

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
