import { ReactElement } from "react";

type NavigationLink_T = {
  id: string | number;
  title: string;
  subTitle?: string;
  icon?: string | ReactElement;
  href?: string;
};
