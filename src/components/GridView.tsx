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
import { Icon } from "@iconify/react";
import styles from "../styles/Home.module.css";

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

  return (
    <Grid container spacing={1}>
      {items.map((item: GridView_T) => (
        <Grid
          key={item.id}
          item
          {...getBreakpoints()}
          {...(item.gridProps || {})}
        >
          <Accordion
            component="div"
            expanded={selected === item.title}
            id={item.id.toString()}
            className={styles.card}
            sx={{
              color: "white",
              backgroundColor: "#000000",
              padding: "0.25em",
              maxWidth: "100%",
              cursor: item.onClick ? "pointer" : "default",
              margin: "4px 0",
              '& .MuiAccordionSummary-content': {
                margin: '8px 0',
              }
            }}
            onClick={() => {
              if (item.onClick) {
                item.onClick();
              } else {
                setSelected((prev) => (prev === item.title ? null : (item.title ?? null)));
              }
            }}
          >
            <AccordionSummary>
              <ListItem
                alignItems="flex-start"
                sx={{
                  padding: { xs: '4px', sm: '8px' },
                  "&.Mui-expanded": {
                    backgroundColor: "#000000",
                    color: "white",
                  },
                }}
                secondaryAction={
                  item?.link && (
                    <IconButton
                      edge="end"
                      aria-label="comments"
                      sx={{ 
                        color: "white",
                        padding: { xs: '4px', sm: '8px' }
                      }}
                      component="a"
                      href={item?.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LaunchIcon />
                    </IconButton>
                  )
                }
              >
                <ListItemAvatar>
                  <Avatar 
                    sx={{ 
                      bgcolor: "#000000",
                      width: { xs: 32, sm: 40 },
                      height: { xs: 32, sm: 40 }
                    }} 
                    src={item?.logo}
                  >
                    {typeof item.icon === "string" && <Icon icon={item.icon} />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  sx={{
                    width: "100%",
                    '& .MuiTypography-root': {
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }
                  }}
                  secondary={
                    <React.Fragment>
                      <hr />
                      <Typography
                        sx={{ 
                          width: "100%",
                          fontSize: { xs: '0.8rem', sm: '0.9rem' }
                        }}
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
            {!item.onClick && item.component && (
              <AccordionDetails>{item.component}</AccordionDetails>
            )}
          </Accordion>
        </Grid>
      ))}
    </Grid>
  );
};