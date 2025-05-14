import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import { TimelineEvent_T } from "@/types/TimelineEvent";
import { Typography } from "@mui/material";

interface TimelineViewElementProps {
  includeSeparator: boolean;
  event: TimelineEvent_T;
}

export const TimelineViewElement = ({
  includeSeparator = false,
  event,
}: TimelineViewElementProps) => {
  const { title, subTitle, date, secondary, onClick } = event;

  return (
    <TimelineItem
      style={{
        color: secondary ? "grey" : undefined,
        fontSize: secondary ? "0.8rem" : undefined,
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      <TimelineOppositeContent color="text.info">
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {includeSeparator && <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        <Typography>{subTitle}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};