// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * Own
 */
import { Environment } from "./environment.model";
import { FirebaseConfig } from "../../firebase.config";

export const environment: Environment = {
    production: false,
    showDevModule: true,
    hmr: false,
    activeSecureStorage: false,
    firebase: FirebaseConfig,
    authPortalUrl: "",
    sessionExpirationMinutes: 300,
    sessionName: "",
    CLIENT_ID: "86f37f3b-943b-4ab2-ba62-bc6cfcd442f5",
    CLIENT_SECRET: "85394159-5670-452b-94c9-7411d5732487",
    CLIENT_CERTIFICATE: "",
    COMMON_BASE_SERVER_PATH: "https://ionicdominicana.com.do",
    COMMON_API_URL: "dev/api",
    COMMON_API_VERSION: "v1",
    COMMON_API_TARGET: "",
    CURRENT_LANGUAGE: "es",
    ENV_PROVIDERS: [],
    CUSTOMER_FEATURES_ENABLED: [
        "CORE",
        "CONTACT_INFO",
        "ONBOARDING",
        "DASHBOARD",
        "SIGNIN",
    ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
