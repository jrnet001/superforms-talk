import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CascadingSelectsComponent } from './cascading-selects/cascading-selects.component';
import { SharedModule } from '../shared';
import { CategoryShellComponent } from './category-shell.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  imports: [CommonModule, SharedModule, CategoryRoutingModule],
  declarations: [CategoryShellComponent, CascadingSelectsComponent, AutocompleteComponent]
})
export class FormlyAdvancedModule {}
