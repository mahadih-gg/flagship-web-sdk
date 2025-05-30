"use client";

import { FlagshipContainer } from "flagship-web-sdk";
import { ReactNode } from "react";

interface FlagshipProviderProps {
  children: ReactNode;
}

export default function FlagshipProvider({ children }: FlagshipProviderProps) {
  return <FlagshipContainer>{children}</FlagshipContainer>;
} 