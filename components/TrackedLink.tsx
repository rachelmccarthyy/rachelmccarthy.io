"use client";

import { track } from "@vercel/analytics";

type TrackedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  properties?: Record<string, string>;
};

export default function TrackedLink({ event, properties, onClick, children, ...rest }: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, properties);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
