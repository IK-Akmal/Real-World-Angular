import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorInterface } from "src/app/shared/types/backendError.interface";

@Component({
    selector: 'app-backend-error-messages',
    templateUrl: './backendErrorMessages.component.html',
    styleUrls: ['./backendErrorMessages.component.scss']
})
export class BackendErrorMessageComponent implements OnInit {

    @Input('backendErrors') BackendErrorProps!: BackendErrorInterface;

    errorMessages!: string[]

    ngOnInit(): void {
        this.errorMessages = Object
            .keys(this.BackendErrorProps)
            .map((name: string) => {
                const message = this.BackendErrorProps[name].join(', ');
                return `${name} ${message}`;
            })
    }
}