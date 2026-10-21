"use client";

import { usePathname } from "next/navigation";

// Kontakt sekcija (id="kontakt") postoji samo na početnoj i na /contact/.
// Tamo gumbi skrolaju do nje, a s ostalih stranica vode na /contact/.
export function useContactHref() {
  const pathname = usePathname();
  const hasSection = pathname === "/" || pathname.replace(/\/$/, "") === "/contact";
  return hasSection ? "#kontakt" : "/contact/";
}
