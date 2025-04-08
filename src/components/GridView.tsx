import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { GridView_T } from "@/types/GridView";

import IconButton from "@mui/material/IconButton";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "@/app/page.module.css";

interface GridViewProps {
  items: GridView_T[];
}

export const GridView = ({ items = [] }: GridViewProps) => {
  const [selected, setSelected] = React.useState<string | null>(null);

  const getBreakpoints = () => {
    return {
      lg: 3,
      md: 6,
      sm: 12,
      xs: 12,
    };
  };

  // @ts-ignore
  return (
    <Grid container spacing={2}>
      {items.map((item: GridView_T) => (
        <Grid
          key={item.title}
          item
          {...getBreakpoints()}
          {...(item.gridProps || {})}
        >
          <Accordion
            expanded={selected === item.title}
            id={item.title}
            className={styles.card}
            sx={{
              color: "white",
              backgroundColor: "#000000",
              padding: "0.5em",
              maxWidth: "100%",
            }}
          >
            <AccordionSummary>
              <ListItem
                alignItems="flex-start"
                onClick={() => {
                  //@ts-ignore
                  setSelected((prev) =>
                    prev === item.title ? null : item.title,
                  );
                }}
                sx={{
                  "&.Mui-expanded": {
                    backgroundColor: "#000000",
                    color: "white",
                  },
                  cursor: "pointer",
                }}
                secondaryAction={
                  item?.link && (
                    <IconButton
                      edge="end"
                      aria-label="comments"
                      sx={{ color: "white" }}
                      component={Link}
                      href={item?.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <LaunchIcon />
                    </IconButton>
                  )
                }
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#000000" }} src={item?.logo}>
                    {typeof item.icon === "string" && <Icon icon={item.icon} />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  sx={{
                    width: "100%",
                  }}
                  secondary={
                    <React.Fragment>
                      <hr />
                      <Typography
                        sx={{ width: "100%" }}
                        component="span"
                        variant="body2"
                        color="white"
                      >
                        {item.subTitle}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>{item.component}</AccordionDetails>
          </Accordion>
        </Grid>
      ))}
    </Grid>
  );
};
