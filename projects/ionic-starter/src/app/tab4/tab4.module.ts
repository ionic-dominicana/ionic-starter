import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

/**
 * Own
 */
// modules
import { Tab4PageRoutingModule } from "./tab4-routing.module";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

// pages
import { Tab4Page } from "./tab4.page";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{ path: "", component: Tab4Page }]),
        Tab4PageRoutingModule,
    ],
    declarations: [Tab4Page],
})
export class Tab4PageModule {
    constructor() {
        // to do
    }
}
