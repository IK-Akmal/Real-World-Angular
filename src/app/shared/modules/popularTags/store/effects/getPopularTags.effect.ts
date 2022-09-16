import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { PopularTagsService } from "../../service/popularTags.service";
import { GetPopularTagsResponseInterface } from "../../types/getPopularTagsResponse.interface";
import { PopularTagType } from "../../types/PopularTagType";
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "../actions/getPopularTags.action";



@Injectable()
export class GetPopularTagsEffect {
    constructor(
        private action$: Actions,
        private popularTagsService: PopularTagsService
    ) { }

    getPopularTags$ = createEffect(() => this.action$.pipe(
        ofType(getPopularTagsAction),
        switchMap(() => {
            return this.popularTagsService.getPopularTags().pipe(
                map((popularTags: PopularTagType[]) => {
                    return getPopularTagsSuccessAction({ popularTags })
                }),
                catchError(()=>{
                    return of(getPopularTagsFailureAction())
                })
            )
        })
    ))
}