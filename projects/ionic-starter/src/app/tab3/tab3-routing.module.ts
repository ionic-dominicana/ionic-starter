import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/**
 * Own
 */
// pages
import { Tab3Page } from "./tab3.page";

const routes: Routes = [
    {
        path: "",
        component: Tab3Page,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Tab3PageRoutingModule {
    constructor() {
        // to do
    }
}
