import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
  },
  {
      path: 'dashboard',
      loadChildren: ()=>
        import('./dashboard/dashboard.module').then(
          (file)=>file.DashboardModule
          ),
  },
  {
      path: '**',
      redirectTo: 'dashboard'
  },
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false, //Turn this on to log routing events to the console
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules

}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
