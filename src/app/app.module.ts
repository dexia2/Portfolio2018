// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatStepperModule} from '@angular/material';

// Custom Component
import { AppComponent } from './app.component';
import { CareerComponent } from './career/career.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OverviewComponent } from './overview/overview.component';
import { SkillComponent } from './skill/skill.component';

/**
 * モジュール
 */
@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    HomeComponent,
    NavigationComponent,
    OverviewComponent,
    SkillComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
