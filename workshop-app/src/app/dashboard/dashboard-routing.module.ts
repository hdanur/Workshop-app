import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VideoDashboardComponent } from "./video-dashboard/video-dashboard.component";

const routes: Routes = [
{
  path:'',
  component: VideoDashboardComponent,
},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
