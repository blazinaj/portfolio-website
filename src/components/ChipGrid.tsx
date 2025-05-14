import { Chip, Grid } from "@mui/material";
import { Chip_T } from "@/types/Chip";
import { IconComponent } from "@/components/IconComponent";

interface ChipGridProps {
  chips: Chip_T[];
}

export const ChipGrid = ({ chips }: ChipGridProps) => {
  return (
    <Grid container spacing={1} className="skills-list">
      {chips.map((chip: Chip_T) => (
        <Grid item key={chip.id} className="skill" lg={3} md={4} sm={6} xs={12}>
          <Chip
            sx={{
              color: "white",
              padding: { xs: '4px', sm: '8px' },
              width: "100%",
              height: "auto",
              "& .MuiChip-label": {
                display: "block",
                width: "100%",
                whiteSpace: "normal",
                padding: { xs: '2px', sm: '4px' },
                fontSize: { xs: '0.8rem', sm: '0.9rem' }
              }
            }}
            icon={chip.icon ? <IconComponent icon={chip.icon} /> : undefined}
            label={chip.label}
            variant="outlined"
          />
        </Grid>
      ))}
    </Grid>
  );
};