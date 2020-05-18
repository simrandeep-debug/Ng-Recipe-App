import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import {  } from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe(' A test recipe ', ' This is a test recipe ', 
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg'),

    new Recipe(' A test recipe 2 ', ' This is a test recipe ', 
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg'),


    new Recipe(' A test recipe 3', ' This is a test recipe ', 
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg'),


  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected( recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
