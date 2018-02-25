import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { TimelineComponent } from './components/timeline/timeline.component';

const appRoute: Routes = [
  { path: '', component: TimelineComponent },
  { path: 'grids', component: GridComponent },
  { path: 'timeline', component: TimelineComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
