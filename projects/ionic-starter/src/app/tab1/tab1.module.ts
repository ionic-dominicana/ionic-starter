import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

/**
 * Own
 */
// modules
import { Tab1PageRoutingModule } from "./tab1-routing.module";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

// pages
import { Tab1Page } from "./tab1.page";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule
    ],
    declarations: [Tab1Page]
})
export class Tab1PageModule {
    constructor() {
        // to do
    }
}
