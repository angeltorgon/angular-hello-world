import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';
import { TestService } from '../test.service';

@NgModule({
  declarations: [ViewComponentComponent],
  imports: [
    CommonModule
  ],
  providers: [
    TestService
  ],
  exports: [
    ViewComponentComponent
  ]
})
export class ViewModule { }
