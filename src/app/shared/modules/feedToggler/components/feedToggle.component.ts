import { Component, Input, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { isLoggedInSelector } from "src/app/auth/store/selector";


@Component({
    selector: 'app-feed-toggle',
    templateUrl: './feedToggle.component.html'
})
export class FeedTogglerComponent implements OnInit {
    @Input('tagName') tagNameProps!: string | null;
    isLoggedIn$!: Observable<boolean | null>;


    constructor(
        private store: Store
    ) { }
    ngOnInit(): void {
        this.initializeValues();
    }

    initializeValues(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    }
}