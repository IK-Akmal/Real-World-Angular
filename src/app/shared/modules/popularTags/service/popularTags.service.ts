import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { GetPopularTagsResponseInterface } from "../types/getPopularTagsResponse.interface";
import { PopularTagType } from "../types/PopularTagType";


@Injectable()
export class PopularTagsService {
    constructor(
        private http: HttpClient
    ) { }

    getPopularTags():Observable<PopularTagType[]>{
        const url = environment.apiUrl + '/tags'
        return this.http
            .get<GetPopularTagsResponseInterface>(url)
            .pipe(map((response:GetPopularTagsResponseInterface)=>response.tags))
    }
}