import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchRepository } from 'src/app/shared/services/search-repository.service';

@NgModule({
  declarations: [ContentListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ContentListComponent],
  providers: [SearchRepository],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentListModule {}
