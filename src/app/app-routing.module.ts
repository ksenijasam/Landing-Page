import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      { path: '', component: TopBarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
