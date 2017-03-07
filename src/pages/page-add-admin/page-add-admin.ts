import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PageHelpMesAdmin} from '../../pages/page-help-mes-admin/page-help-mes-admin';

import axios from 'axios'

/*
  Generated class for the PageMonCompte page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-add-admin',
  templateUrl: 'page-add-admin.html'
})
export class PageAddAdmin {
  private admins: any[];
  private search: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const _this = this;
    axios.get('http://localhost:8080/admin/list/')
      .then(function (response) {
        _this.admins = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  public Add_Favorite_Admin(pIdAdmin){
    console.log('add favorite admin');
    var req = 'http://localhost:8080/admin/add/' + this.pIdUser + '/' + pIdAdmin;
    const _this = this;
    console.log(req)
    axios.post(req)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error){
        console.log(error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAddAdminPage');
  }
  public Gopage_help_mesadmin(){
    this.navCtrl.push(PageHelpMesAdmin);

  }

}
