import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PageAide page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-aide',
  templateUrl: 'page-aide.html'
})
export class PageAide {
    openAnswer:boolean=false;
    
    public topQuestions = [
        {question: 'Comment on fait une appli ?', reponse:'On fait comme ça !'},
        {question: 'On va manger ?', reponse:'Oui ! <3'}
];
        
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAidePage');
  }
  
  public toggleAnswer(event,index){
    if(this.openAnswer==false){
    console.log(event.toElement.parentNode.innerHTML += '<ion-card-content>' + this.topQuestions[index].reponse + '</ion-card-content>' )
        this.openAnswer=true;
        }else{
            console.log(event.toElement.innerHTML = this.topQuestions[index].question)
            this.openAnswer=false;
    }
  }
}