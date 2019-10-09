import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';


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
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo:"Mauricio Orlandeli",
    data:"November 5, 1955",
    descricao:"Estou criando um app incrivel...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public loader;
  public refresher;
  public isRefreshing:boolean = false;
  
  public lista_filmes = new Array<any>();
  public obj :any;
  public page: 1;
  public infiniteScrooll;




  public nome_usuario:string = "Mauricio Orlandeli"

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider,
    public loadingController: LoadingController 
    ) {
  }
  
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, {id : filme.id });
  }

  abreCarregando(){
    this.loader = this.loadingController.create({
      content : "Carregando filmes...",
      duration: 2000
    })
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  public somaDeDoisValores(num1:number, num2:number):void{
    console.log('somaDeDoisValores');
    alert("Resultado" + (num1+num2));
  }

  ionViewDidEnter(){
    this.carregarFilmes();
  } 

  doInfinite(infiniteScroll){
    this.page++;
    this.infiniteScrooll = infiniteScroll;
    
    this.carregarFilmes(true);
  }


  carregarFilmes(newPage:boolean = false){
    console.log('ionViewDidLoad FeedPage');
    this.abreCarregando();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data=>{
        console.log(data);
        this.obj = data;

        if(newPage){
          this.lista_filmes = this.lista_filmes.concat(this.obj.results);
          this.infiniteScrooll.complete();
        }else{
          this.lista_filmes = this.obj.results;
        } 

        console.log(this.lista_filmes);
      }, error=>{
        console.log(error);
      }
      
    )
    this.fechaCarregando();
    if(this.isRefreshing){
      this.refresher.complete();
      this.isRefreshing = false;
    }
    
  }

}
