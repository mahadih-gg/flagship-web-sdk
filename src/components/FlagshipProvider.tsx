"use client";

import { FlagshipContainer } from "@thinkflagship/web-shorts";
import { ReactNode } from "react";

interface FlagshipProviderProps {
  children: ReactNode;
}

export default function FlagshipProvider({ children }: FlagshipProviderProps) {
  return <FlagshipContainer>{children}</FlagshipContainer>;
} 