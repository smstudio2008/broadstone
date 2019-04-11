import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { CoreRoutingModule } from 'src/app/shared/routes/core-routing.module';
import { SearchRepository } from 'src/app/shared/services/search-repository.service';


@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, HomePageModule],
  exports: [RouterModule],
  providers: [SearchRepository],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
