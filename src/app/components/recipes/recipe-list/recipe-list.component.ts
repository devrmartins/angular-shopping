import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe('Recipe 1', 'Testing recipe component', 'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d'),
    new Recipe('Recipe 2', 'Testing recipe component', 'https://c.pxhere.com/images/45/e8/97d46a089d87a53cdcab75006a29-1613433.jpg!d')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
