import { ReactElement } from "react";

type GridView_T = {
  id: string | number;
  title?: string | null;
  subTitle?: string | null;
  icon?: string | ReactElement | null;
  gridProps?: object;
  link?: string;
};
