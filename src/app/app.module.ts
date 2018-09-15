// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatStepperModule} from '@angular/material';

// Custom Component
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

/**
 * モジュール
 */
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
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
