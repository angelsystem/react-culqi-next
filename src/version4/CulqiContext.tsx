"use client";

import React, { useState, useEffect, ReactNode } from "react";
import type { CulqiContextProps } from "./interfacesv4";

export const CulqiContext = React.createContext<CulqiContextProps>({
  culqiLoaded: false,
});

export const baseCulqiUrl = "https://checkout.culqi.com";
const culqiUrl = `${baseCulqiUrl}/js/v4`;

interface CulqiProviderProps {
  publicKey: string;
  children: ReactNode;
}

export const CulqiProvider = ({
  publicKey,
  children,
}: CulqiProviderProps): React.JSX.Element => {
  const [culqiLoaded, setCulqiLoaded] = useState(false);

  useEffect(() => {
    if (!publicKey) throw new Error("Please pass along a publicKey prop.");
  }, [publicKey]);

  useEffect(() => {
    if (!publicKey) return;
    const script = document.createElement("script");
    script.src = culqiUrl;
    script.async = true;

    script.onload = () => {
      window.Culqi.publicKey = publicKey;
      setCulqiLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [publicKey]);

  return (
    <CulqiContext.Provider value={{ culqiLoaded }}>
      {children}
    </CulqiContext.Provider>
  );
};
