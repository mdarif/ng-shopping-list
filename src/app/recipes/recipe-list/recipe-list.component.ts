import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

/**
 * Component decorator
 *
 * Decorator that marks a class as an Angular component and provides configuration
 * metadata that determines how the component should be processed, instantiated,
 * and used at runtime.
 */
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})

/**
 * RecipeListComponent class
 *
 * This class is responsible for the recipe list component.
 */
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];
}
