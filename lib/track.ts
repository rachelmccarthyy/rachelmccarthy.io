import { track as vercelTrack } from "@vercel/analytics";

export function track(event: string, properties?: Record<string, string>) {
  if (typeof window !== "undefined" && localStorage.getItem("owner") === "true") return;
  vercelTrack(event, properties);
}
