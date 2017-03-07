import { Component } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import { PageHelpMesAdmin} from '../../pages/page-help-mes-admin/page-help-mes-admin';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import axios from 'axios';

/*
  Generated class for the PageAffluence page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-affluence',
  templateUrl: 'page-affluence.html'
})
export class PageAffluence {

  public admin = {};

  public dateString = giveDate(new Date());//for the display
  public date = new Date();//for the back (load the right char...)
  public dateLimit = this.date;//Forbid to go to an older date
  public adminId; // While we don't give it from the admin chosen
  public horaireOpti = 7//for the moment
  public horaireOptiString = "7h-8h";
  public serviceChoose:any;
  public horaireChoose:any;
  public barChartData:any[] = [
    {data: [], label: 'Series A'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public chartsModule: ChartsModule,private alertCtrl: AlertController) {
    this.adminId = navParams.get("adminId");
    const _this = this;

    axios.get('http://localhost:8080/admin/' + this.adminId)
      .then(function (response) {
        _this.admin = response.data
        console.log(_this.admin)
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("Data loaded");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAffluencePage');
  }

  public Gopage_help_mesadmin(){
    this.navCtrl.push(PageHelpMesAdmin);

  }

  public barChartOptions:any = {
    responsive: true,
    scales: {
      xAxes: [{
        categoryPercentage: 1
      }],
      yAxes: [{
        display: false
      }],
    }
  }

  public barChartLabels:string[] = ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];

  public barChartType:string = 'bar';

  public barChartLegend:boolean = false;

  private colors = [
    {
      backgroundColor: '#387ef5'
    }
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public decreaseDate():void {
    if(this.dateLimit < this.date)
      this.changeDate(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()-1));
  }

  public increaseDate():void {
    this.changeDate(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()+1));
  }

  public changeDate(date):void {//It is actually a setMethod for date and dateString
    this.date = date;
    this.dateString = giveDate(date);
    this.generateGraph(date);
  }

  public iGo():void {
    /*let data = this.barChartData[0].data;
    data[horaire-7]++;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;*/
    //this.presentAlert();
    //this.navCtrl.push(PageJyVais);
    let date = this.date.setHours(this.horaireChoose,0,0);
    console.log(date);
    axios.post('http://localhost:8080/asks/add', {"adminId":this.adminId, "userId":1, "serviceId":this.serviceChoose, "arrivalTime":this.date.getTime(), "endWaitingTIme":'2017-10-5 5:0:0',"departureTime":'2017-10-5T0:0:0.10Z',"dayOfWeek":this.date.getDay()})// we still have to change the dates
      .then(function () {
      });
  }
  public confirmIGo():void{
    let alert = this.alertCtrl.create({
      title: 'Voulez vous vraiment venir à cet horaire ?',
      message: 'Je viens entre ' + this.horaireChoose + 'h et ' + (parseInt(this.horaireChoose) + 1) + 'h.',
      buttons: [
        {
          text: 'Confirmer',
          handler: () => {
            console.log('Oui clicked');
            this.iGo()
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
  public generateGraph(date):void {//this function will have to find the data of the chart at the right date in the database

    const _this = this;

    axios.get('http://localhost:8080/admin/12')
      .then(function (response) {
        let data = response.data.affluence;
        let clone = JSON.parse(JSON.stringify(_this.barChartData));
        clone[0].data = data;
        _this.barChartData = clone;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
function giveDate(date):string{
  var dateString
  var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
  var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
  dateString = days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
  return dateString;
}
