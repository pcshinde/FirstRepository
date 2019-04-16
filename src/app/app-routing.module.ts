import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { Child6Component } from './child6/child6.component';
import { VideothumbComponent } from './videothumb/videothumb.component';
import { ProductuploadComponent } from './productupload/productupload.component';
import { CompinteractComponent } from './compinteract/compinteract.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Register', component: Child1Component },
  { path: 'Twoway', component: Child2Component },
  { path: 'Form', component: Child3Component },
  { path: 'Sendata', component: Child4Component },
  { path: 'receivedata', component: Child5Component },
  { path: 'checkboxform', component: FormComponent },
  { path: 'localstorage', component: Child6Component },
  { path: 'fetchvideo', component: VideothumbComponent },
  { path: 'productupload', component: ProductuploadComponent },
  { path: 'componetinteract', component: CompinteractComponent },
  { path: 'productpage', component: ProductpageComponent },
  { path: 'charts', component: ChartComponent},
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

