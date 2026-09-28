interface TarteaucitronInitOptions {
  privacyUrl?: string;
  bodyPosition?: "top" | "bottom";
  hashtag?: string;
  cookieName?: string;
  orientation?: "top" | "bottom" | "middle" | "popup";
  groupServices?: boolean;
  showDetailsOnClick?: boolean;
  serviceDefaultState?: "true" | "wait" | "false";
  showAlertSmall?: boolean;
  showTitleBanner?: boolean;
  cookieslist?: boolean;
  cookieslistEmbed?: boolean;
  closePopup?: boolean;
  showIcon?: boolean;
  iconPosition?: "BottomRight" | "BottomLeft" | "TopRight" | "TopLeft";
  adblocker?: boolean;
  DenyAllCta?: boolean;
  AcceptAllCta?: boolean;
  highPrivacy?: boolean;
  alwaysNeedConsent?: boolean;
  handleBrowserDNTRequest?: boolean;
  removeCredit?: boolean;
  moreInfoLink?: boolean;
  readmoreLink?: string;
  mandatory?: boolean;
  mandatoryCta?: boolean;
  googleConsentMode?: boolean;
  softConsentMode?: boolean;
  partnersList?: boolean;
}

interface TarteaucitronUser {
  googletagmanagerId?: string;
  [key: string]: string | undefined;
}

interface TarteaucitronGlobal {
  init: (options: TarteaucitronInitOptions) => void;
  user: TarteaucitronUser;
  job: string[];
}

declare global {
  interface Window {
    tarteaucitron?: TarteaucitronGlobal;
    tarteaucitronForceLanguage?: string;
    tarteaucitronCustomText?: Record<string, string>;
  }
}

export {};
