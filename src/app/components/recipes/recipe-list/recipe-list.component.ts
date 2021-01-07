import { RecipesService } from './../recipes.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output()
  onRecipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Array<Recipe> = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().then((recipes) => {
      this.recipes = recipes;
    });
  }

  onRecipeSelected(recipe: Recipe) {
    this.onRecipeWasSelected.emit(recipe);
  }
}
