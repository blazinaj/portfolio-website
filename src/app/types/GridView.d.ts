import { ReactElement } from "react";

type GridView_T = {
  id: string | number;
  title: string;
  subTitle: string;
  icon?: ReactElement;
  gridProps?: object;
  link?: string;
};
