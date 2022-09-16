import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeedTogglerComponent } from "./components/feedToggle.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [FeedTogglerComponent],
    exports: [FeedTogglerComponent]
})
export class FeedTogglerModule {
}