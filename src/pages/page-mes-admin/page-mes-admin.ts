import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PageAffluence } from '../../pages/page-affluence/page-affluence';
import { PageAddAdmin} from "../page-add-admin/page-add-admin";
import { PageHelpMesAdmin} from '../../pages/page-help-mes-admin/page-help-mes-admin';

import axios from 'axios'

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

  public admins = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const _this = this;

    axios.get('http://localhost:8080/admin/list')
      .then(function (response) {
        _this.admins = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  public Gopage_affluence(pAdminId){
    this.navCtrl.push(PageAffluence,{
      adminId: pAdminId
    });
  }
  public supprimer(pAdminId){

  }
  public Gopage_add_admin(){
    this.navCtrl.push(PageAddAdmin);
  }
  public Gopage_help_mesadmin(){
    this.navCtrl.push(PageHelpMesAdmin);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PageMesAdminPage');
  }

}
