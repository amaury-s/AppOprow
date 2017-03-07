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
  selector: 'page-page-mon-compte',
  templateUrl: 'page-mon-compte.html'
})
export class PageMonCompte {

  public info = {};
  public pIdUser = 1;
  public date:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const _this = this;
    axios.get('http://localhost:8080/users/' + _this.pIdUser)
      .then(function (response) {
        _this.info = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageMonComptePage');
  }

  public Gopage_help_mesadmin(){
    this.navCtrl.push(PageHelpMesAdmin);

  }

}
