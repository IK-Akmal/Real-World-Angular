import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PersistanceService } from "./persistance.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private persistanceService: PersistanceService
    ) { }

    intercept(requset: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this.persistanceService.get('accessToken');
        requset = requset.clone({
            setHeaders: {
                authorization: token ? `Token ${token}` : ''
            }
        })
        return next.handle(requset);
    }
}