import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { HoverDirective,SizeCard} from './dynamic-content/dynamic-content.directive'
import { AsideToggleDirective } from './aside/aside.directive';
import { DragDropDirective } from './upload-files/drag-drop.directive'
@NgModule({
  declarations: [
    DynamicFieldDirective,
    HoverDirective,
    SizeCard,
    AsideToggleDirective,
    DragDropDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicFieldDirective,
    HoverDirective,
    SizeCard,
    AsideToggleDirective,
    DragDropDirective
  ]
})
export class DirectivesModule { }
