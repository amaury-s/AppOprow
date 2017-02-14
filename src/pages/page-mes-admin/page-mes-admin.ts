import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PageAffluence } from '../../pages/page-affluence/page-affluence';

/*
  Generated class for the PageMesAdmin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-mes-admin',
  templateUrl: 'page-mes-admin.html'
})
export class PageMesAdmin {
  
  public names = ['Mairie 12', 'Mairie 15'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public Gopage_affluence(pAdminId){
    this.navCtrl.push(PageAffluence,{
      adminId: pAdminId
    });
  }
  public supprimer(pAdminId){
    this.names.splice(pAdminId, 1);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PageMesAdminPage');
  }

}
