import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('A test Recipe', 'A simple Test Recipe', 
    'https://www.goodhousekeeping.com/food-recipes/g1633/potato-recipes/?slide=1'),
    new Recipe('A Second Test Recipe', 'A simple Second Test Recipe', 
    'https://www.goodhousekeeping.com/food-recipes/g1633/potato-recipes/?slide=1')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
