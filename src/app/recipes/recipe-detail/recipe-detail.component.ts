import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipieService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TitleTagService } from 'src/app/object-graph/service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDisplay: Recipe;
  id: number;
  constructor(private recipeService: RecipieService,
              private route: ActivatedRoute,
              private router: Router,
              private titleTagService: TitleTagService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeDisplay = this.recipeService.loadById(this.id);
        this.titleTagService.setTitle(this.recipeDisplay.name);
        this.titleTagService.setSocialMediaTags(
          'http://localhost:4200/recipes/'+this.id, 
          this.recipeDisplay.name,
          this.recipeDisplay.description,
          this.recipeDisplay.imagePath);
      }
    );
    
  }

  addToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeDisplay.ingredients);
  }

  editRecipe(){
    this.router.navigate(['edit'], {relativeTo : this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo : this.route});
  }

}
