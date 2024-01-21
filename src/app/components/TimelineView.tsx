import Timeline from "@mui/lab/Timeline";
import { TimelineViewElement } from "@/app/components/TimelineViewElement";
import { TimelineEvent_T } from "@/app/types/TimelineEvent";

interface TimelineViewProps {
  events: TimelineEvent_T[];
}

export const TimelineView = ({ events }: TimelineViewProps) => {
  return (
    <Timeline>
      {events.map((event: TimelineEvent_T, index: number) => {
        return (
          <TimelineViewElement
            key={event.id}
            event={event}
            includeSeparator={index !== events.length - 1}
          />
        );
      })}
    </Timeline>
  );
};
