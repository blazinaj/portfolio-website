import { ReactElement } from "react";

type PageSection_T = {
  id: string | number;
  icon?: string | ReactElement;
  title: string;
  subTitle: string;
  component: ReactElement;
  href?: string;
};
