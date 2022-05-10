import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from 'src/app/pokemon/pokemon.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'pokemon', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
