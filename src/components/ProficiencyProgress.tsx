import ReactStars from "react-stars";

interface ProficiencyProgressProps {
  proficiency: number | undefined;
}

export const ProficiencyProgress = ({ proficiency }: ProficiencyProgressProps) => {
  return (
    <ReactStars
      count={5}
      value={proficiency || 0}
      size={12}
      color2={"#ffd700"}
      edit={false}
      half={false}
    />
  );
};