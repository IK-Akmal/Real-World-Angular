import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { FeedService } from "../../service/feed.service";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/getFeed.action";

@Injectable()
export class GetFeedEffect {

    constructor(
        private actions$: Actions,
        private FeedService: FeedService,
    ) { }

    getFeedUser$ = createEffect(() => this.actions$.pipe(
        ofType(getFeedAction),
        switchMap(({ url }) => {
            return this.FeedService.getFeed(url).pipe(
                map((feed: GetFeedResponseInterface) => {
                    return getFeedSuccessAction({ feed });
                }),
                catchError(() => {
                    return of(getFeedFailureAction());
                })
            )
        })
    ))

}