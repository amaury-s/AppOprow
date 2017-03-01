import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PageHelpMesAdmin} from '../../pages/page-help-mes-admin/page-help-mes-admin';

/*
  Generated class for the PageMesInfos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-mes-documents',
  templateUrl: 'page-mes-documents.html'
})
export class PageMesDocuments {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageMesDocumentsPage');
  }
  public Gopage_help_mesadmin(){
    this.navCtrl.push(PageHelpMesAdmin);

  }

}
