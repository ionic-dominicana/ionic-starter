import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/**
 * Own
 */
// pages
import { Tab1Page } from "./tab1.page";

const routes: Routes = [
    {
        path: "",
        component: Tab1Page,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Tab1PageRoutingModule {
    constructor() {
        // to do
    }
}
