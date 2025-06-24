"use client";

import { FlagshipContainer } from "@thinkflagship/web-shorts";
import { ReactNode } from "react";

interface FlagshipProviderProps {
  children: ReactNode;
}

export default function FlagshipProvider({ children }: FlagshipProviderProps) {

  const licenseKey = process.env.NEXT_PUBLIC_FLAGSHIP_WEB_SDK_LICENSE_KEY;
  return (
    <FlagshipContainer licenseKey={licenseKey}>
      {children}
    </FlagshipContainer>
  );
} 