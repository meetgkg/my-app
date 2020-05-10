import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Rohu Fish', 'Rohu Fish Recipe', 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Labeo_rohita.JPG'),
    new Recipe('Salmon Fish', 'Salmon Fish Recipe', 'https://cdn.pixabay.com/photo/2019/04/21/09/14/salmon-4143734_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
