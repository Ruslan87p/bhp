import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    HttpClientModule,
    
  ],
  exports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
