
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { SearchRepository } from 'src/app/shared/services/search-repository.service';
import { InitialAppState } from 'src/app/shared/redux/interface/initialState';
import { createActionApiFetchSuccess } from 'src/app/shared/redux/actions/creator';
import { Content } from 'src/app/core/model/content';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @select() searchResult;
  constructor(private contentList: SearchRepository, private ngRedux: NgRedux<InitialAppState>) {}

  public results: Array<Content>;

  ngOnInit() {
    this.getContentlist();
  }

  public getContentlist() {
    this.contentList.fetchAll().subscribe((resp: Content[]) => {
      this.results = resp;
      this.ngRedux.dispatch(createActionApiFetchSuccess(this.results));
    });
  }
}
