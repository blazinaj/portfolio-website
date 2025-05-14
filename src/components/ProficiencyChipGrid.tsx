import { ChipGrid } from "@/components/ChipGrid";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { ProficiencyChip_T } from "@/types/ProficiencyChip";
import { ProficiencyProgress } from "@/components/ProficiencyProgress";
import { IconComponent } from "@/components/IconComponent";
import Link from "next/link";

interface ProficiencyChipGridProps {
  chips: ProficiencyChip_T[];
}

export const ProficiencyChipGrid = ({ chips }: ProficiencyChipGridProps) => {
  const proficiencyText = (proficiency: number | undefined) => {
    switch (proficiency) {
      case 1:
        return "Beginner";
      case 2:
        return "Familiar";
      case 3:
        return "Comfortable";
      case 4:
        return "Skilled";
      case 5:
        return "Expert";
      default:
        return "Unknown";
    }
  };
  
  const formatChipInput = (chip: ProficiencyChip_T) => {
    const content = (
      <Box
        title={proficiencyText(chip.proficiency)}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          minHeight: "40px",
        }}
      >
        <Box 
          sx={{ 
            display: "flex",
            alignItems: "center",
            fontSize: "1.5em",
            minWidth: "32px"
          }}
        >
          <IconComponent icon={chip.icon} />
        </Box>
        <Box
          sx={{
            flex: "1 1 auto",
            minWidth: 0, // Enable text truncation
          }}
        >
          <Typography 
            noWrap 
            sx={{
              fontSize: "0.9rem",
              lineHeight: "1.2"
            }}
          >
            {chip.label}
          </Typography>
        </Box>
        <Box sx={{ 
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          paddingLeft: "8px"
        }}>
          <ProficiencyProgress proficiency={chip.proficiency} />
        </Box>
      </Box>
    );

    return {
      id: chip.id,
      label: chip.link ? (
        <Link href={chip.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
          {content}
        </Link>
      ) : content,
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