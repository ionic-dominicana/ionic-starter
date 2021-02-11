import { Component, Input, OnInit } from "@angular/core";
import { Plugins } from "@capacitor/core";

const { Browser } = Plugins;

@Component({
    selector: "app-explore-container",
    templateUrl: "./explore-container.component.html",
    styleUrls: ["./explore-container.component.scss"],
})
export class ExploreContainerComponent {

    /**
     * DOM Props
     */
    @Input() public name: string;

    /**
     * Props
     */
    public projectUrl: string;

    constructor() {
        this.projectUrl = "https://github.com/1antares1/ionic-starter";
    }

    public async openPage(customUrl?: string): Promise<void> {
        await Browser.open({ url: customUrl ?? this.projectUrl });
    }
}
