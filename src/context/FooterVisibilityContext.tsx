"use client";
import React, { createContext, useContext, useState } from "react";

interface FooterVisibilityContextType {
  isFooterVisible: boolean;
  setIsFooterVisible: (visible: boolean) => void;
}

const FooterVisibilityContext = createContext<
  FooterVisibilityContextType | undefined
>(undefined);

export function FooterVisibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  return (
    <FooterVisibilityContext.Provider
      value={{ isFooterVisible, setIsFooterVisible }}
    >
      {children}
    </FooterVisibilityContext.Provider>
  );
}

export function useFooterVisibility() {
  const context = useContext(FooterVisibilityContext);
  if (context === undefined) {
    throw new Error(
      "useFooterVisibility must be used within a FooterVisibilityProvider"
    );
  }
  return context;
}
