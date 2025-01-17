import { Component, OnInit, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/Recipe';
import {RecipesService} from 'src/app/services/recipes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  
  @HostBinding('class') classes = 'row';

  recipes: Recipe[] = null;
  server: string = environment.API_URL;
  subscription: Subscription;

  constructor(private recipesService: RecipesService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.getRecipes();
    this.subscription = this.recipesService.getSearchResults().subscribe(res => this.recipes = res)
  }

  getRecipes(){
    this.recipesService.getRecipes().subscribe(
      res => this.recipes = res,
      err => console.log(err)
    );
  }

  deleteRecipe(id: string){
    this.recipesService.deleteRecipe(id).subscribe(
      res=>{console.log(res); 
        this.getRecipes();
      },
      err=>{console.log(err);}
    );
  }
}
