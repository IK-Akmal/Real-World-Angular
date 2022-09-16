import { Component, Input, OnInit } from "@angular/core";
import { UtilsService } from "src/app/shared/services/utitls.service";


@Component({
    selector: 'app-pagination[total][limit][currentPage][url]',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    @Input('total') totalProps!: number
    @Input('limit') limitProps!: number
    @Input('currentPage') currentPageProps!: number
    @Input('url') urlProps!: string

    pagesCount!: number
    pages!: number[];

    constructor(
        private utilsService: UtilsService
    ) { }

    ngOnInit(): void {
        console.log(this.totalProps);
        console.log('limit', this.limitProps);

        this.pagesCount = Math.ceil(this.totalProps / this.limitProps);



        this.pages = this.utilsService.range(1, this.pagesCount);
        console.log(this.pages);
    }

}