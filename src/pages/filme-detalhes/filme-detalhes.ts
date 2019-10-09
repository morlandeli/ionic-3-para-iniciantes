import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers:[MoovieProvider]
})
export class FilmeDetalhesPage {
  public filme;
  public filmeId;
  public ojb;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public movieProvider: MoovieProvider) {
  }

  ionViewDidEnter() {
    this.filmeId = this.navParams.get("id");
    console.log("filmeId recebido: " + this.filmeId);
    this.movieProvider.getMovie(this.filmeId).subscribe(
      data=>{
       this.filme = data;
      }, error=>{
        console.log(error);
      }
    )
  }

}
