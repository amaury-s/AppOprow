import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {PageMesInfos} from '../page-mes-infos/page-mes-infos'

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageMonComptePage');
  }

  public Gopage_mesinfos(){
    this.navCtrl.push(PageMesInfos);
  }

}
