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
  public pIdUser = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const _this = this;
    axios.get('http://localhost:8080/admin/list/' + _this.pIdUser)
      .then(function (response) {
        _this.admins = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });


  }
  public delete_admin(pIndex, pIdAdmin){
    console.log('delete admin');
    console.log(pIndex);
    var req = 'http://localhost:8080/admin/delete/' + this.pIdUser + '/' + pIdAdmin;
    const _this = this;
    console.log(req)
    axios.post(req)
      .then(function (response) {
        console.log(response);
        _this.admins.splice(pIndex, 1);
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

  public Gopage_add_admin(){
    this.navCtrl.push(PageAddAdmin);
  }
  public Gopage_help_mesadmin(){
    this.navCtrl.push(PageHelpMesAdmin);

  }

  public getColor(){
    var ouverture = new Date("February 4, 2017 10:13:00");
    var fermeture = new Date("March 1, 2017 20:13:00");
    var date = new Date();
    if(date>ouverture && date<fermeture){
      return "green_id";
    }else{
      return "red_id";
    }
  }



  ionViewDidLoad(){
    console.log('ionViewDidLoad PageMesAdminPage');
  }

}
