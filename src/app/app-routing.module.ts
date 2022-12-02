import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './part-17-routing/child-a/child-a.component';
import { ChildBComponent } from './part-17-routing/child-b/child-b.component';
import { FirstRoutingComponentComponent } from './part-17-routing/first-routing-component/first-routing-component.component';
import { MyGuardGuard } from './part-17-routing/my-guard.guard';
import { SecondRoutingComponentComponent } from './part-17-routing/second-routing-component/second-routing-component.component';

const routes: Routes = [{
  path: 'first-component/:id', component: FirstRoutingComponentComponent,
  children: [
    { path: 'child-a', component: ChildAComponent },
    { path: 'child-b', component: ChildBComponent },
  ]
},{
  path: 'second-component', component: SecondRoutingComponentComponent, canActivate: [MyGuardGuard]
},{
  path: '**', component: FirstRoutingComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
