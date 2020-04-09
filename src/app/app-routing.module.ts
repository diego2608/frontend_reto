import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { FormClienteComponent } from './public/form-cliente/form-cliente.component';
import { ClientsComponent } from './public/clients/clients.component';


const routes: Routes = [{path:'', redirectTo:'dashboard',pathMatch:'full'},
{path:'dashboard', component:DashboardComponent},
{path:'create', component:FormClienteComponent},
{path:'clients', component:ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
