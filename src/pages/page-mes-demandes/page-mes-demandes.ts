import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
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
  public pIdUser = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

    const _this = this;

    axios.get('http://localhost:8080/asks/list')
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
  public delete_ask(pIdAsk){
  console.log('delete ask');
  console.log(pIdAsk);
  var req = 'http://localhost:8080/asks/delete/' + this.pIdUser + '/' + pIdAsk;
  const _this = this;
  console.log(req)
  axios.post(req)
    .then(function (response) {
      console.log(response);
      _this.demandes.splice(pIdAsk, 1);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  public confirm(pIdAsk){
      let alert = this.alertCtrl.create({
        message: 'Voulez vous vraiment supprimer votre demande ?',
        buttons: [



          {
            text: 'Oui',
            handler: () => {
              this.delete_ask(pIdAsk);
            }
          },
          {
            text: 'Annuler',
            handler: () => {
              console.log('Annuler clicked');
            }
          }
        ]
      });
      alert.present();
  }


  ionViewDidLoad(){
    console.log('ionViewDidLoad PageMesDemandesPage');
  }
}
