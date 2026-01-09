"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

// Initialize PostHog synchronously (only runs in browser)
if (typeof window !== "undefined") {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

  // Only initialize if we have a valid key and haven't already initialized
  if (key && key !== "your_posthog_project_api_key" && !posthog.__loaded) {
    posthog.init(key, {
      // Use reverse proxy to avoid ad blockers (configured in next.config.js)
      api_host: "/ingest",
      ui_host: "https://us.i.posthog.com",
      // Security & Privacy best practices
      persistence: "localStorage",
      autocapture: false, // Disable auto-capture to control what's tracked
      capture_pageview: false, // Manual pageview control
      disable_session_recording: true, // Disable session replay by default
      mask_all_text: true, // If session replay enabled later, mask all text
      mask_all_element_attributes: true, // Mask sensitive attributes
      // Note: respect_dnt disabled - add back if you want to honor Do Not Track
      // respect_dnt: true,
    });

    // Expose posthog globally for debugging (can be removed in production)
    (window as any).posthog = posthog;
  }
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return <PHProvider client={posthog}>{children}</PHProvider>;
}
