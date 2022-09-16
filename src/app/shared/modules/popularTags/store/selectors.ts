import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popularTagsState.interface";



export const popularTagsFeatureSelector = createFeatureSelector<PopularTagsStateInterface>('popularTags');

export const isLoadingSelector = createSelector(
    popularTagsFeatureSelector,
    (state: PopularTagsStateInterface) => state.isLoading
)

export const popularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (state: PopularTagsStateInterface) => state.data
);

export const errorSelector = createSelector(
    popularTagsFeatureSelector,
    (state: PopularTagsStateInterface) => state.error
);