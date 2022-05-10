import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl: string = "https://pokeapi.co/api/v2/pokemon";
  private apiUrl2: string = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  constructor(private http:HttpClient) {}

    /*Esto son Inyecciones importantes porque aquí le digo una instancia que me permite traer esto  */
    getPokemon(name: string){
     // return this.http.get(this.apiUrl+`/${name}`)
      return this.http.get(`${this.apiUrl}/${name}`)
    }
    getPokemons(){
      return this.http.get(this.apiUrl2);
    }
}
