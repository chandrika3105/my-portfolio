// import { NgModule } from '@angular/core';
// import { ExtraOptions, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// const routerOptions: ExtraOptions = {
//   anchorScrolling: 'enabled',
//   scrollPositionRestoration: 'enabled',
// };

// @NgModule({
//   imports: [RouterModule.forRoot(routes,routerOptions)],
//   exports: [RouterModule]
// })

// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Keep HomeComponent as your landing page
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      scrollPositionRestoration: 'enabled', 
      anchorScrolling: 'enabled' 
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

