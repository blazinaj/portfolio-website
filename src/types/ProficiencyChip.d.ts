import { ReactElement } from "react";

type ProficiencyChip_T = {
  id: string | number;
  icon?: string | ReactElement;
  label: string | ReactElement;
  proficiency?: number;
  link?: string;
};