import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ChartsModule } from 'ng2-charts/ng2-charts';

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

  public dateString = giveDate(new Date());//for the display
  public date = new Date();//for the back (load the right char...)
  public adminId:any;
  public horaireOpti = 7//for the moment
  public horaireOptiString = "7h-8h";
  public horaireChoose:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chartsModule: ChartsModule) {
    this.generateGraph(this.date);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAffluencePage');
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

  public barChartData:any[] = [
    {data: [12, 18, 15, 20, 18, 23, 26, 20, 19, 16, 17, 16, 12], label: 'Series A'}//we don't need this default values anymore
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public decreaseDate():void {
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

  public iGo(horaire):void {
    let data = this.barChartData[0].data;
    data[horaire-7]++;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    //this.calculateNewHoraire(this.date);//We can put this here to recalculate the horaireOpti but it can change the range of the chart(displayed)
  }
  public generateGraph(date):void {//this function will have to find the data of the chart at the right date in the database
  let data = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100)];
  let clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = data;
  this.barChartData = clone;
  this.calculateNewHoraire(date);
}

  public calculateNewHoraire(date):void{//maybe we won't need date
    let data = this.barChartData[0].data;
    for(let i = 0; i < 13; i++){
      if(data[i] < data[this.horaireOpti-7]){
        this.horaireOpti = i + 7;
      }
    }
    this.horaireOptiToString();
  }

  public horaireOptiToString(){
    var plages = ["7h-8h","8h-9h","9h-10h","10h-11h","11h-12h","12h-13h","13h-14h","14h-15h","15h-16h","16h-17h","17h-18h","18h-19h","19h-20h"];
    this.horaireOptiString =  plages[this.horaireOpti - 7];
  }
}
function giveDate(date):string{
  var dateString
  var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
  var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
  dateString = days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
  return dateString;
}

