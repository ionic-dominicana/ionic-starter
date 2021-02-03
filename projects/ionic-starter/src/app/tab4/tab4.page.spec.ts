import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

/**
 * Own
 */
// modules
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

// pages
import { Tab4Page } from "./tab4.page";

describe("Tab4Page", () => {
    let component: Tab4Page;
    let fixture: ComponentFixture<Tab4Page>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [Tab4Page],
                imports: [
                    IonicModule.forRoot(),
                    ExploreContainerComponentModule,
                ],
            }).compileComponents();

            fixture = TestBed.createComponent(Tab4Page);
            component = fixture.componentInstance;
            fixture.detectChanges();
        })
    );

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
