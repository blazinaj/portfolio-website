import { createContext, useContext, useState } from "react";

const VisibilityContext = createContext({
  visibleSection: "",
  visibilityCallback: (id: string | number, isVisible: boolean) => {},
});

const VisibilityContextProvider = VisibilityContext.Provider;

const useVisibilityContextState = () => {
  const [visibleSection, setVisibleSection] = useState("about-hero");

  const visibilityCallback = (id: string | number, isVisible: any) => {
    if (isVisible) {
      setVisibleSection(id.toString());
    }
  };

  return {
    visibleSection,
    visibilityCallback,
  };
};

const useVisibilityContext = () => {
  const context = useContext(VisibilityContext);
  if (context === undefined) {
    throw new Error(
      "useVisibilityContext must be used within a VisibilityContextProvider",
    );
  }
  return context;
};

export {
  VisibilityContext,
  VisibilityContextProvider,
  useVisibilityContext,
  useVisibilityContextState,
};
