"use client";

import Script from "next/script";
import { analytics } from "@/content/analytics";

function initTarteaucitron() {
  const tac = window.tarteaucitron;
  if (!tac) return;

  tac.user.googletagmanagerId = analytics.gtmId;
  tac.job = tac.job || [];
  tac.job.push("googletagmanager");

  tac.init({
    privacyUrl: "/politique-cookies",
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
}

export function TarteaucitronLoader() {
  return (
    <Script
      src="/tarteaucitron/tarteaucitron.min.js"
      strategy="afterInteractive"
      onLoad={initTarteaucitron}
    />
  );
}
