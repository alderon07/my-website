"use client";

import React, { Suspense, useCallback, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const REDIRECT_URI = "https://naqihaider.vercel.app/callback";

export default function CallbackPage() {
  return (
    <Suspense fallback={<CallbackFallback />}>
      <CallbackContent />
    </Suspense>
  );
}

function CallbackContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const [copied, setCopied] = useState(false);

  const copyCode = useCallback(async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op
    }
  }, [code]);

  return (
    <main className="min-h-screen bg-cyber-black text-cyber-text flex items-center justify-center px-4">
      <section className="w-full max-w-2xl rounded-2xl border border-cyber-cyan/20 bg-[#111827]/70 p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-cyber-cyan">
          Spotify Callback
        </h1>

        {error ? (
          <p className="mt-4 text-sm sm:text-base text-red-300">
            Spotify returned an error: <span className="font-semibold">{error}</span>
          </p>
        ) : code ? (
          <>
            <p className="mt-4 text-sm sm:text-base text-cyber-text/90">
              Authorization code received. Copy it and exchange it for tokens.
            </p>
            <div className="mt-4 rounded-xl border border-cyber-cyan/25 bg-black/40 p-3">
              <code className="block break-all text-xs sm:text-sm text-cyber-cyan">
                {code}
              </code>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={copyCode}
                className="rounded-xl bg-cyber-cyan/20 px-4 py-2 text-sm font-medium text-cyber-cyan hover:bg-cyber-cyan/30"
              >
                {copied ? "Copied" : "Copy code"}
              </button>
              <span className="text-xs text-cyber-text/70">
                Redirect URI used: <code>{REDIRECT_URI}</code>
              </span>
            </div>
          </>
        ) : (
          <p className="mt-4 text-sm sm:text-base text-cyber-text/80">
            No Spotify auth code found in the URL.
          </p>
        )}

        <div className="mt-8">
          <Link
            href="/links"
            className="text-sm text-cyber-lime underline underline-offset-4"
          >
            Back to links page
          </Link>
        </div>
      </section>
    </main>
  );
}

function CallbackFallback() {
  return (
    <main className="min-h-screen bg-cyber-black text-cyber-text flex items-center justify-center px-4">
      <section className="w-full max-w-2xl rounded-2xl border border-cyber-cyan/20 bg-[#111827]/70 p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-cyber-cyan">
          Spotify Callback
        </h1>
        <p className="mt-4 text-sm sm:text-base text-cyber-text/80">
          Loading callback details...
        </p>
      </section>
    </main>
  );
}
