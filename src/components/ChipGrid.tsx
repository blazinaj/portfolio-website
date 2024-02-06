import { Chip, Grid } from "@mui/material";
import { Chip_T } from "@/types/Chip";
import {IconComponent} from "@/components/IconComponent";

interface ChipGridProps {
  chips: Chip_T[];
}

/**
 * Displays Chips in a MUI Grid
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
            icon={<IconComponent icon={chip.icon}/>}
            label={chip.label}
            variant="outlined"
          />
        </Grid>
      ))}
    </Grid>
  );
};
