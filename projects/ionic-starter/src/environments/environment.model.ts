export interface Environment {
    production: boolean;
    activeSecureStorage: boolean;
    authPortalUrl: string;
    sessionExpirationMinutes: number;
    sessionName: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    CLIENT_CERTIFICATE: string;
    COMMON_BASE_SERVER_PATH: string;
    COMMON_API_URL: string;
    COMMON_API_VERSION: string;
    COMMON_API_TARGET: string;
    CURRENT_LANGUAGE: string;
    ENV_PROVIDERS: any[];
    CUSTOMER_FEATURES_ENABLED?: string[];
    ADMIN_FEATURES_ENABLED?: string[];
    hmr?: boolean;
    showDevModule?: boolean;
    firebase?: any;
}
