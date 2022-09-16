import { GetPopularTagsResponseInterface } from "./getPopularTagsResponse.interface";
import { PopularTagType } from "./PopularTagType";

export interface PopularTagsStateInterface {
    isLoading: boolean;
    error: string | null;
    data: PopularTagType[] | null;
}

