import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PageHelpMesAdmin} from '../../pages/page-help-mes-admin/page-help-mes-admin';

import axios from 'axios'

/*
  Generated class for the PageMesDemandes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-mes-demandes',
  templateUrl: 'page-mes-demandes.html'
})
export class PageMesDemandes {


  public demandes = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const _this = this;

    axios.get('http://localhost:8080/asks/list/1')
      .then(function (response) {
        _this.demandes = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  public Gopage_help_mesadmin(){
    this.navCtrl.push(PageHelpMesAdmin);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageMesDemandesPage');
  }

}
