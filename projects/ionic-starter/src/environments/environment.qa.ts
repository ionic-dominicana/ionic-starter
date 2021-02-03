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
    CLIENT_ID: "92301545-a297-4765-a89e-1b23a423143e",
    CLIENT_SECRET: "57153bcf-d1bc-43a4-8a8d-c96e594165aa",
    CLIENT_CERTIFICATE: "",
    COMMON_BASE_SERVER_PATH: "https://ionicdominicana.com.do",
    COMMON_API_URL: "test/api",
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
