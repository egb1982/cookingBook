import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipesService } from './services/recipes.service';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component'

import { SpeechSynthesisModule } from '@kamiazya/ngx-speech-synthesis';
import { PlaybackButtonsComponent } from './components/playback-buttons/playback-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RecipeFormComponent,
    RecipeListComponent,
    RecipeViewComponent,
    PlaybackButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SpeechSynthesisModule.forRoot({lang:'es',volume:1.0,pitch:1.0, rate:1.0})
  ],
  providers: [ RecipesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
