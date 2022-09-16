import { Injectable } from "@angular/core";

@Injectable()
export class UtilsService {
    range(start: number, end: number): number[] {
        console.log(start, end);

        return Array.from(Array<number>(end), (_, index) => index + start)
    }
}