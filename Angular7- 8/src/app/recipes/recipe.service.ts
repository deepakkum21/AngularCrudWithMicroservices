import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes : Recipe[] = [
    new Recipe('A test Recipe', 'A simple Test Recipe', 
    'https://www.goodhousekeeping.com/holidays/easter-ideas/g5062/vegan-easter-recipes/?slide=2'),
    new Recipe('A Second Test Recipe', 'A simple Second Test Recipe', 
    'https://www.goodhousekeeping.com/food-recipes/g1633/potato-recipes/?slide=1')
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
