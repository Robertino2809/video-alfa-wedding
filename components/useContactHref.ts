"use client";

import { usePathname } from "next/navigation";

// Na početnoj gumbi skrolaju do kontakt forme (id="kontakt"),
// a sa svih ostalih stranica vode na /contact/.
export function useContactHref() {
  const pathname = usePathname();
  return pathname === "/" ? "#kontakt" : "/contact/";
}
