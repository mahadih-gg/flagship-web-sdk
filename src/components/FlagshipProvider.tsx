"use client";

import { FlagshipContainer } from "@thinkflagship/web-shorts";
import { ReactNode } from "react";

interface FlagshipProviderProps {
  children: ReactNode;
}

export default function FlagshipProvider({ children }: FlagshipProviderProps) {

  const licenseKey = "pk_live_aafa7f50ccf816858e8c4294c9e1f1fcb90a748b0e013b44.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmxhZ3NoaXAgV2ViIiwicGxhdGZvcm1UeXBlIjoiV0VCIiwiZG9tYWluIjp7ImRvbWFpbiI6Imh0dHBzOi8vZmxhZ3NoaXAtd2ViLXNkay52ZXJjZWwuYXBwIiwidmVyaWZpZWQiOmZhbHNlfSwiZXhwaXJlc0F0IjoiMjEyNS0wNS0zMVQxMDo0MzozMC41OTJaIiwiY3JlYXRlZEJ5IjoiNjg1NDA5ODQ0MGJlM2U4ODI2NGY0NTZjIiwidGVuYW50SWQiOiI2ODU0MDk4NDQwYmUzZTg4MjY0ZjQ1NjciLCJfaWQiOiI2ODVhODE1MmE3ZTU2MjdkYmIwYzY5YzciLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NTA3NjE4MTAsImV4cCI6NDkwNDM2MTgxMH0.wQL-kn2GrMOBxmgUNvnJ2uAfogR_142XSzYjPUuckyw";
  return (
    <FlagshipContainer licenseKey={licenseKey} platformId="https://flagship-web-sdk.vercel.app">
      {children}
    </FlagshipContainer>
  );
} 