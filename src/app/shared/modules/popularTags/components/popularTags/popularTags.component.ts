import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getPopularTagsAction } from "../../store/actions/getPopularTags.action";
import { errorSelector, isLoadingSelector, popularTagsSelector } from "../../store/selectors";
import { PopularTagType } from "../../types/PopularTagType";


@Component({
    selector: 'app-popular-tags',
    templateUrl: './popularTags.component.html'
})
export class PopularTagsComponent implements OnInit {
    isLoading$!: Observable<boolean>;
    popularTags$!: Observable<PopularTagType[] | null>
    error$!: Observable<string | null>

    constructor(
        private store: Store
    ) { }


    ngOnInit(): void {
        this.initializeValues();
        this.fetchPopularTags();
    }

    initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.popularTags$ = this.store.pipe(select(popularTagsSelector));
        this.error$ = this.store.pipe(select(errorSelector));
    }

    fetchPopularTags(): void {
        this.store.dispatch(getPopularTagsAction());
    }
}