import { Icon } from "@iconify/react";
import React from "react";

export interface IconComponentProps {
  icon?: string | React.ReactElement;
}

export const IconComponent = ({ icon }: IconComponentProps) => {
  if (typeof icon === "string") {
    return <Icon icon={icon} />;
  }

  return icon;
};
