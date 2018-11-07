import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComboboxComponent } from './combobox.component';
import { GetSelectedNamePipe } from './combobox.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ComboboxComponent, GetSelectedNamePipe],
  exports: [ComboboxComponent]
})
export class ComboboxModule {}
