import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressBarModule } from '@angular/material/progress-bar';
import {MatToolbarModule } from '@angular/material/toolbar';
import { from } from 'rxjs';

const materialModules = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ... materialModules
  ],
  exports: [
    ... materialModules
  ]
})
export class AngularMaterialModule { }
