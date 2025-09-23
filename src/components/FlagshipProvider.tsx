"use client";

import { FlagshipContainer } from "@thinkflagship/web-shorts";
import { ReactNode } from "react";

interface FlagshipProviderProps {
  children: ReactNode;
}

export default function FlagshipProvider({ children }: FlagshipProviderProps) {

  const licenseKey = "pk_live_8933e32b3cd37b43dd999afac0b123fb70c0e2113542aa98.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmxhZ3NoaXAgV2ViIFNESyIsInBsYXRmb3JtVHlwZSI6IldFQiIsImRvbWFpbiI6eyJkb21haW4iOiJodHRwczovL2ZsYWdzaGlwLXdlYi1zZGsudmVyY2VsLmFwcCIsInZlcmlmaWVkIjpmYWxzZX0sImV4cGlyZXNBdCI6IjIxMjUtMDgtMzBUMTU6MzQ6NDMuMDgwWiIsImNyZWF0ZWRCeSI6IjY4OWUxN2EwMzgxMTVhN2IxYjIxMzI0YiIsInRlbmFudElkIjoiNjg5ZTE3OWYzODExNWE3YjFiMjEzMjQ3IiwiX2lkIjoiNjhkMmJlMTNiODMzNGJjOWRjZmE2NGYyIiwidG9rZW5UeXBlIjoiYWNjZXNzIiwiaWF0IjoxNzU4NjQxNjgzLCJleHAiOjQ5MTIyNDE2ODN9.mjdUVrjc9hz077QWE_oMkrGKdYlZkOvtoOMAefW6U6w";
  return (
    <FlagshipContainer licenseKey={licenseKey} platformId="https://flagship-web-sdk.vercel.app">
      {children}
    </FlagshipContainer>
  );
} 