import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './order-by.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    ListItemsComponent,
    OrderByPipe,
  ],
  exports: [
    HomeComponent,
    ListItemsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class HomeModule { }
