import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
  {
    path:"contact",
    component: FormComponent
  },
  {
    path:"home",
    component: SlideshowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
