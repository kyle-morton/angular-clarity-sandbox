import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ClarityModule } from '@clr/angular';
import { ShellComponent } from './components/shell/shell.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    ShellComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ClarityModule
  ]
})
export class AdminModule { }
