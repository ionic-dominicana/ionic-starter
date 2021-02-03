/**
 * Own
 */
import { Environment } from "./environment.model";
import { FirebaseConfig } from "firebase.config";

export const environment: Environment = {
    production: true,
    showDevModule: false,
    hmr: false,
    activeSecureStorage: true,
    firebase: FirebaseConfig,
    authPortalUrl: "",
    sessionExpirationMinutes: 300,
    sessionName: "",
    CLIENT_ID: "751d67a6-36eb-4880-ba86-ca36ac6c537f",
    CLIENT_SECRET: "c1c5a0e6-7d39-4a91-a6d1-6966721b920e",
    CLIENT_CERTIFICATE: "",
    COMMON_BASE_SERVER_PATH: "https://ionicdominicana.com.do",
    COMMON_API_URL: "latam/api",
    COMMON_API_VERSION: "v1",
    COMMON_API_TARGET: "",
    CURRENT_LANGUAGE: "es",
    ENV_PROVIDERS: [],
    CUSTOMER_FEATURES_ENABLED: [
        "CORE",
        "CONTACT_INFO",
        "ONBOARDING",
        "DASHBOARD",
    ],
};
