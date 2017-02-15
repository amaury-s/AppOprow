import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

    public demandes = [
        {name: 'Mairie 14', need:'Refaire passeport', date:'Jeudi 32 Janvier', time:'14h30'},
        {name: 'Mairie 15', need: 'Manger une pomme', date:'Lundi 3 Mai', time:'9h17'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageMesDemandesPage');
  }

}
