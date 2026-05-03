"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { capture } from "@/lib/analytics";

export type PrimitiveLibrary = "radix" | "base";

const PRIMITIVE_LIBRARIES: PrimitiveLibrary[] = ["radix", "base"];

interface PrimitiveContextType {
  selectedPrimitive: PrimitiveLibrary;
  setPrimitive: (primitive: PrimitiveLibrary) => void;
  isHydrated: boolean;
}

const PrimitiveContext = createContext<PrimitiveContextType>({
  selectedPrimitive: "radix",
  setPrimitive: () => {},
  isHydrated: false,
});

const STORAGE_KEY = "primitive-library";

const getStoredPrimitive = (): PrimitiveLibrary => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && PRIMITIVE_LIBRARIES.includes(stored as PrimitiveLibrary)) {
      return stored as PrimitiveLibrary;
    }
    setStoredPrimitive("radix");
  } catch (error) {
    console.warn("Failed to read primitive library from localStorage:", error);
  }

  return "radix";
};

const setStoredPrimitive = (primitive: PrimitiveLibrary) => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, primitive);
  } catch (error) {
    console.warn("Failed to save primitive library to localStorage:", error);
  }
};

export const PrimitiveProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedPrimitive, setSelectedPrimitive] =
    useState<PrimitiveLibrary>("radix");
  const [isHydrated, setIsHydrated] = useState(false);

  const setPrimitive = (primitive: PrimitiveLibrary) => {
    setSelectedPrimitive(primitive);
    setStoredPrimitive(primitive);
    capture("block:primitive_library_change", {
      primitive_library: primitive,
    });
  };

  useEffect(() => {
    const stored = getStoredPrimitive();
    setSelectedPrimitive(stored);
    setIsHydrated(true);
  }, []);

  return (
    <PrimitiveContext.Provider
      value={{
        selectedPrimitive,
        setPrimitive,
        isHydrated,
      }}
    >
      {children}
    </PrimitiveContext.Provider>
  );
};

export const usePrimitive = () => {
  const context = useContext(PrimitiveContext);
  if (!context) {
    throw new Error("usePrimitive must be used within a PrimitiveProvider");
  }
  return context;
};
