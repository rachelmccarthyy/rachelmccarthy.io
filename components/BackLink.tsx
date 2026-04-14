"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BackLink({ fallback, label }: { fallback: string; label: string }) {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1 && document.referrer.includes(window.location.origin));
  }, []);

  const onClick = (e: React.MouseEvent) => {
    if (canGoBack) {
      e.preventDefault();
      router.back();
    }
  };

  return (
    <a
      href={fallback}
      onClick={onClick}
      className="text-[10px] uppercase tracking-[0.2em] font-medium text-fg/60 hover:text-[#FFE033]"
    >
      {label}
    </a>
  );
}
