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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAidePage');
  }

  public toggleAnswer(event,index){

    if(event.toElement.parentNode.children.item(1).innerHTML.trim() == ""){
      event.toElement.parentNode.children.item(1).innerHTML = this.topQuestions[index].reponse
    }else{
      event.toElement.parentNode.children.item(1).innerHTML = ""
    }

  }
}
