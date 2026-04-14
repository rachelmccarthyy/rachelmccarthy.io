"use client";

import { useEffect } from "react";

export default function TimeTracker() {
  useEffect(() => {
    const start = Date.now();

    function getVisitId() {
      const match = document.cookie.match(/(?:^|; )visit_id=([^;]*)/);
      return match ? match[1] : null;
    }

    function sendDuration() {
      const visitId = getVisitId();
      if (!visitId) return;
      const duration = (Date.now() - start) / 1000;
      if (duration < 1) return; // ignore sub-second visits
      navigator.sendBeacon(
        "/api/log-duration",
        new Blob(
          [JSON.stringify({ visitId, duration })],
          { type: "application/json" }
        )
      );
    }

    // Send duration when the tab is hidden or the page is closed
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") sendDuration();
    });
    window.addEventListener("beforeunload", sendDuration);

    return () => {
      document.removeEventListener("visibilitychange", sendDuration);
      window.removeEventListener("beforeunload", sendDuration);
    };
  }, []);

  return null;
}
