import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { GridView_T } from "@/app/types/GridView";

interface GridViewProps {
  items: GridView_T[];
}

export const GridView = ({ items = [] }: GridViewProps) => {
  return (
    <Grid container spacing={2}>
      {items.map((item: GridView_T) => (
        <Grid
          key={item.title}
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          {...(item.gridProps || {})}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#000000" }}>{item.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={
                <React.Fragment>
                  <hr />
                  <Typography
                    sx={{ display: "inline" }}
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
        </Grid>
      ))}
    </Grid>
  );
};
