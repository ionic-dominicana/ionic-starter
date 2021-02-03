import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed, waitForAsync } from "@angular/core/testing";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

/**
 * Own
 */
// components
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    let statusBarSpy: any;
    let splashScreenSpy: any;
    let platformReadySpy: any;
    let platformSpy: any;

    beforeEach(
        waitForAsync(async () => {
            statusBarSpy = jasmine.createSpyObj("StatusBar", ["styleDefault"]);
            splashScreenSpy = jasmine.createSpyObj("SplashScreen", ["hide"]);
            platformReadySpy = Promise.resolve();
            platformSpy = jasmine.createSpyObj("Platform", {
                ready: platformReadySpy,
            });

            await TestBed.configureTestingModule({
                declarations: [AppComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                providers: [
                    { provide: StatusBar, useValue: statusBarSpy },
                    { provide: SplashScreen, useValue: splashScreenSpy },
                    { provide: Platform, useValue: platformSpy },
                ],
            }).compileComponents();
        })
    );

    it("should create the app", async () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        await expect(app).toBeTruthy();
    });

    it("should initialize the app", async () => {
        TestBed.createComponent(AppComponent);
        await expect(platformSpy.ready).toHaveBeenCalled();
        await platformReadySpy;
        await expect(statusBarSpy.styleDefault).toHaveBeenCalled();
        await expect(splashScreenSpy.hide).toHaveBeenCalled();
    });

    // TODO: add more tests!
});
