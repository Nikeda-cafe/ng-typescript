import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HogeComponent } from './hoge/hoge.component';

const routes: Routes = [
  { path: 'hoge', component: HogeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
