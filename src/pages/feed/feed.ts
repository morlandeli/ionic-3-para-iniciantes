import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:string = "Mauricio Orlandeli"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  public somaDeDoisValores(num1:number, num2:number):void{
    console.log('somaDeDoisValores');
    alert("Resultado" + (num1+num2));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.somaDeDoisValores(12,23);
    
  }

}
