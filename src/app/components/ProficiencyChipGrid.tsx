import {ChipGrid} from "@/app/components/ChipGrid";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {ProficiencyChip_T} from "@/app/types/ProficiencyChip";
import {ProficiencyProgress} from "@/app/components/ProficiencyProgress";

interface ProficiencyChipGridProps {
  chips: ProficiencyChip_T[];
}

export const ProficiencyChipGrid = ({ chips }: ProficiencyChipGridProps) => {
  const formatChipInput = (chip: ProficiencyChip_T) => {
    return {
      id: chip.id,
      label: (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box sx={{ fontSize: "2em", flexGrow: 1 }}>{chip.icon}</Box>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography>{chip.label}</Typography>
          </Box>
          <Box>
            <ProficiencyProgress proficiency={chip.proficiency} />
          </Box>
        </Box>
      ),
    };
  };

  return (
    <ChipGrid
      chips={chips
        .sort((a, b) => (b.proficiency || 0) - (a.proficiency || 0))
        .map(formatChipInput)}
    />
  );
};
