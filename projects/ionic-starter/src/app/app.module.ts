import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { ServiceWorkerModule } from "@angular/service-worker";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { NG_ENTITY_SERVICE_CONFIG } from "@datorama/akita-ng-entity-service";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { AkitaNgRouterStoreModule } from "@datorama/akita-ng-router-store";

/**
 * Own
 */
import { environment } from "../environments/environment";

// modules
import { AppRoutingModule } from "./app-routing.module";

// components
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        environment.production ? [] : AkitaNgDevtools.forRoot(),
        AkitaNgRouterStoreModule,
        ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: environment.production,
        }),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        {
            provide: NG_ENTITY_SERVICE_CONFIG,
            useValue: { baseUrl: "https://jsonplaceholder.typicode.com" },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
        // to do
    }
}
