import { Chip, Grid } from "@mui/material";
import { Chip_T } from "@/types/Chip";

interface ChipGridProps {
  chips: Chip_T[];
}

/**
 * Displays Chips in a MUI Grid
 * @constructor
 */
export const ChipGrid = ({ chips }: ChipGridProps) => {
  return (
    <Grid container spacing={2} className="skills-list">
      {chips.map((chip: Chip_T) => (
        <Grid item key={chip.id} className="skill" lg={3}>
          <Chip
            sx={{
              color: "white",
              padding: "1em",
              fontSize: "0.5em",
              width: "100%",
            }}
            icon={chip.icon}
            label={chip.label}
            variant="outlined"
          />
        </Grid>
      ))}
    </Grid>
  );
};
