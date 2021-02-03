import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/**
 * Own
 */
// pages
import { Tab2Page } from "./tab2.page";

const routes: Routes = [
    {
        path: "",
        component: Tab2Page,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Tab2PageRoutingModule {
    constructor() {
        // to do
    }
}
