export type TimelineEvent_T = {
  id: string | number;
  title: string;
  subTitle: string;
  date: string;
  secondary?: boolean;
  onClick?: () => void;
};