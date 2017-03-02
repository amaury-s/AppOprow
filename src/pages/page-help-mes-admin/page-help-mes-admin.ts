import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-page-help-mes-admin',
  templateUrl: 'page-help-mes-admin.html'
})
export class PageHelpMesAdmin {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageHelpMesAdminPage');
  }

}
