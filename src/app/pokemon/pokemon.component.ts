import { Component} from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

    name!: string;
    urlImage !: string;
    urlTipo !: string;
    urlTipo2 !: string;
    urlName!: string;
    urlPk!: string[];
    urlAbility !: string;
    showExample : boolean = true;
    show:boolean = false;
    showImg: boolean = false;
    classType: string = "classNormal";
    classType2: string = "classNormal";
    mayuscula !: string;
  constructor(private pokemonServices: PokemonService) { }


  search(){
    this.pokemonServices.getPokemon(this.name).
    subscribe((data: any )=>{
      if(data.sprites.front_default == null){}else{this.showImg=true;}
      this.urlImage = data.sprites.front_default;
      this.urlTipo = data.types[0].type.name;

      if(data.types[1] == null){
        this.show = false;
      }else{
        this.urlTipo2 = data.types[1].type.name;
        this.show = true;
      }
      this.choose_type(this.urlTipo,this.urlTipo2,this.show);
      this.urlName = data.species.name;
      this.urlName=(this.urlName[0].toUpperCase())+(this.urlName.slice(1));
      console.log(this.urlName[0].toUpperCase());
      this.urlAbility = data.abilities[0].ability.name;
      this.urlAbility = (this.urlAbility[0].toUpperCase())+(this.urlAbility.slice(1));
    })
  }
  lookPk(){
    this.pokemonServices.getPokemons().
    subscribe((dato: any)=>{
      var n=0;
        for(n=0;n<10;n++){
          this.urlPk = dato.results[n].name;
        }
      }
    )
  }
  choose_type(urlTipo: string,urlTipo2: string,show: boolean){
      if(urlTipo == 'fire'){
        this.classType = "classFire"
      }else if(urlTipo == 'water'){
        this.classType = "classWater"
      }else if(urlTipo == 'grass'){
        this.classType = "classGrass"
      }else if(urlTipo == 'bug'){
        this.classType = "classBug"
      }else if(urlTipo == 'dark'){
        this.classType = "classDark"
      }else if(urlTipo == 'dragon'){
        this.classType = "classDragon"
      }else if(urlTipo == 'electric'){
        this.classType = "classElectric"
      }else if(urlTipo == 'fairy'){
        this.classType = "classFairy"
      }else if(urlTipo == 'fighting'){
        this.classType = "classFighting"
      }else if(urlTipo == 'flying'){
        this.classType = "classFlying"
      }else if(urlTipo == 'ghost'){
        this.classType = "classGhost"
      }else if(urlTipo == 'ground'){
        this.classType = "classGround"
      }else if(urlTipo == 'ice'){
        this.classType = "classIce"
      }else if(urlTipo == 'normal'){
        this.classType = "classNormal"
      }else if(urlTipo == 'poison'){
        this.classType = "classPoison"
      }else if(urlTipo == 'psychic'){
        this.classType = "classPsychic"
      }else if(urlTipo == 'rock'){
        this.classType = "classRock"
      }else if(urlTipo == 'steel'){
        this.classType = "classSteel"
      }

      if(show == true){
        if(urlTipo2 == 'fire'){
          this.classType2 = "classFire"
        }else if(urlTipo2 == 'water'){
          this.classType2 = "classWater"
        }else if(urlTipo2 == 'grass'){
          this.classType2 = "classGrass"
        }else if(urlTipo2 == 'bug'){
          this.classType2 = "classBug"
        }else if(urlTipo2 == 'dark'){
          this.classType2 = "classDark"
        }else if(urlTipo2 == 'dragon'){
          this.classType2 = "classDragon"
        }else if(urlTipo2 == 'electric'){
          this.classType2 = "classElectric"
        }else if(urlTipo2 == 'fairy'){
          this.classType2 = "classFairy"
        }else if(urlTipo2 == 'fighting'){
          this.classType2 = "classFighting"
        }else if(urlTipo2 == 'flying'){
          this.classType2 = "classFlying"
        }else if(urlTipo2 == 'ghost'){
          this.classType2 = "classGhost"
        }else if(urlTipo2 == 'ground'){
          this.classType2 = "classGround"
        }else if(urlTipo2 == 'ice'){
          this.classType2 = "classIce"
        }else if(urlTipo2 == 'normal'){
          this.classType2 = "classNormal"
        }else if(urlTipo2 == 'poison'){
          this.classType2 = "classPoison"
        }else if(urlTipo2 == 'psychic'){
          this.classType2 = "classPsychic"
        }else if(urlTipo2 == 'rock'){
          this.classType2 = "classRock"
        }else if(urlTipo2 == 'steel'){
          this.classType2 = "classSteel"
        }
      }

  }
}
