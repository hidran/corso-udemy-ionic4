import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PokDataProvider} from "../../providers/pok-data/pok-data";
import {Observable} from "rxjs/Observable";
import {Pokemon} from "../../models/pokemon";

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  favorites$ : Observable<Pokemon[]>

  constructor(
       private  evt : Events,
      private pokData: PokDataProvider) {

      this.evt.subscribe('favorite-added', () => {
         this.reloadPoks()
      })

  }
   reloadPoks() {
       this.favorites$ = this.pokData.getFavoritePokemons()
   }
  ionViewDidLoad() {
    this.reloadPoks()
    console.log('ionViewDidLoad FavoritePage');
  }

}
