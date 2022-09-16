import { Component, Input } from "@angular/core";
import { PopularTagType } from "src/app/shared/types/popularTag.type";

@Component({
    selector: 'app-tag-list',
    templateUrl: './tagList.component.html',
})
export class tagListComponent {
    @Input('tags') tagsProps!: PopularTagType[]
}