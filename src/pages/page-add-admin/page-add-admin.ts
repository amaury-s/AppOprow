import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PageHelpMesAdmin} from '../../pages/page-help-mes-admin/page-help-mes-admin';

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
  private searchQuery: string = '';
  private items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAddAdminPage');
  }
  public Gopage_help_mesadmin(){
    this.navCtrl.push(PageHelpMesAdmin);

  }

  initializeItems() {
    this.items = [
      'CAF 13eme',
      'Mairie 14eme',
      'Mairie 5eme',
      'Bar 15eme',
    ]
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
