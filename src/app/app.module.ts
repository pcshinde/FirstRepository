import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component';
import { Child6Component } from './child6/child6.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { SessionstorageComponent } from './sessionstorage/sessionstorage.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { TdformComponent } from './tdform/tdform.component';
import { VideothumbComponent } from './videothumb/videothumb.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductuploadComponent } from './productupload/productupload.component';
import { CompinteractComponent } from './compinteract/compinteract.component';
import { ParentcompoentComponent } from './compinteract/parentcompoent/parentcompoent.component';
import { ChildcomponentComponent } from './compinteract/parentcompoent/childcomponent/childcomponent.component';
import { IgxInputGroupModule, IgxSliderModule } from 'igniteui-angular';
import { MatSlider } from '@angular/material';
import { ChartComponent } from './chart/chart.component';
import { ChartModule } from 'angular-highcharts';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    Child6Component,
    NotfoundComponent,
    HomeComponent,
    FormComponent,
    SessionstorageComponent,
    TdformComponent,
    VideothumbComponent,
    ProductpageComponent,
    ProductuploadComponent,
    CompinteractComponent,
    ParentcompoentComponent,
    ChildcomponentComponent,
    MatSlider,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    AngularWebStorageModule,
    BrowserAnimationsModule,
    IgxInputGroupModule,
    IgxSliderModule,
    ChartModule,
    MaterialModule,
  ],
  providers: [
    MatSlider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
