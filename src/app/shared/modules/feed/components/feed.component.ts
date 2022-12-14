import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { getFeedAction } from "../store/actions/getFeed.action";
import { errorSelector, feedSelector, isLoadingSelector } from "../store/selectors";
import { GetFeedResponseInterface } from "../types/getFeedResponse.interface";

import { parseUrl, stringify } from "query-string";

@Component({
    selector: 'app-feed[apiUrl]',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

    @Input('apiUrl') apiUrlProps!: string

    isLoading$!: Observable<boolean>
    error$!: Observable<string | null>;
    feed$!: Observable<GetFeedResponseInterface | null>

    limit = environment.limit;
    baseUrl!: string;
    currentPage!: number;

    queryParamsSubscription!: Subscription


    constructor(
        private store: Store,
        private router: Router,
        private route: ActivatedRoute
    ) { }



    ngOnInit(): void {
        this.initializeValues();
        this.initializeListerners()
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe()
    }

    initializeListerners() {
        this.queryParamsSubscription = this.route.queryParams
            .subscribe((params: Params) => {
                this.currentPage = Number(params['page'] ?? '1');
                this.fetchFeed();
            })
    }

    initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.feed$ = this.store.pipe(select(feedSelector));
        this.baseUrl = this.router.url.split('?')[0];
    }

    fetchFeed(): void {
        const offset = this.currentPage * this.limit - this.limit;
        const parsedUrl = parseUrl(this.apiUrlProps)
        const stringifiedParams = stringify({
            limit: this.limit,
            offset,
            ...parsedUrl.query
        })
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
        this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));

    }


}