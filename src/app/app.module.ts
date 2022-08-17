import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasboardComponent } from '../components/dasboard/dasboard.component';
import { ContentComponent } from 'src/components/content/content.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    ContentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
