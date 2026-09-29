"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
import { analytics } from "@/content/analytics";

const COOKIE_POLICY_PATH = "/politique-cookies";

function cookiePolicyUrl() {
  return `${window.location.origin}${COOKIE_POLICY_PATH}`;
}

function isCookiePolicyPage(pathname: string) {
  return pathname === COOKIE_POLICY_PATH;
}

function syncCookiePolicyAccess(pathname: string) {
  const onPolicyPage = isCookiePolicyPage(pathname);
  document.documentElement.classList.toggle("cookie-policy-readable", onPolicyPage);

  if (onPolicyPage) {
    document.documentElement.classList.remove("tarteaucitron-modal-open-noscroll");
    return;
  }

  const root = document.getElementById("tarteaucitronRoot");
  const alert = document.getElementById("tarteaucitronAlertBig");
  const bannerStillBlocking =
    root?.classList.contains("tarteaucitronSize-middle") === true &&
    root.classList.contains("tarteaucitronBeforeVisible") === true &&
    alert !== null &&
    alert.style.display !== "none";

  if (bannerStillBlocking) {
    document.documentElement.classList.add("tarteaucitron-modal-open-noscroll");
  }
}

function initTarteaucitron() {
  const tac = window.tarteaucitron;
  if (!tac) return;

  tac.user.googletagmanagerId = analytics.gtmId;
  tac.job = tac.job || [];
  tac.job.push("googletagmanager");

  tac.init({
    privacyUrl: cookiePolicyUrl(),
    bodyPosition: "bottom",
    hashtag: "#cookies",
    orientation: "middle",
    groupServices: true,
    showDetailsOnClick: true,
    closePopup: true,
    showIcon: false,
    DenyAllCta: true,
    AcceptAllCta: true,
    highPrivacy: true,
    mandatory: true,
    mandatoryCta: false,
    googleConsentMode: true,
    partnersList: false,
    removeCredit: true,
  });

  syncCookiePolicyAccess(window.location.pathname);
}

export function TarteaucitronLoader() {
  const pathname = usePathname();

  useEffect(() => {
    syncCookiePolicyAccess(pathname);
  }, [pathname]);

  return (
    <Script
      src="/tarteaucitron/tarteaucitron.min.js"
      strategy="afterInteractive"
      onLoad={initTarteaucitron}
    />
  );
}
