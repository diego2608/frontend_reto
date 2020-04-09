import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbDatepickerModule, NbTreeGridModule, NbToastrService, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormClienteComponent } from './public/form-cliente/form-cliente.component';
import { SidebarComponent } from './public/layout/sidebar/sidebar.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './public/clients/clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  AppComponent,FormClienteComponent, SidebarComponent, DashboardComponent, ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule, 
    HttpClientModule,
    NbCardModule,
    ChartsModule,
    NbDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NbTreeGridModule,
    NbToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
