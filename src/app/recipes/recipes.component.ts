import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
