import { Ingredient } from './../../../models/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() onAddIngredient = new EventEmitter<Ingredient>();
  ingredientForm = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  addIngredient() {
    const ingredient = new Ingredient(
      this.ingredientForm.get('name').value,
      this.ingredientForm.get('amount').value
    );
    this.onAddIngredient.emit(ingredient);
  }
}
