import { Recipe } from './../../../../models/recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() onRecipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onSelected(recipe: Recipe) {
    this.onRecipeSelected.emit(recipe);
  }
}
