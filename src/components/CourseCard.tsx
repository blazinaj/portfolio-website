import { Card, CardContent, CardActionArea, Typography, Chip, Stack, Box } from "@mui/material";
import { Course } from "@/types/Course";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card sx={{ 
      backgroundColor: "#111",
      color: "#fff",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      "&:hover": {
        borderColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
      }
    }}>
      <CardActionArea component={Link} href={course.link || "#"} target="_blank">
        <CardContent>
          <Stack spacing={2}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <Typography variant="h6" component="div" sx={{ color: "#fff" }}>
                {course.name}
              </Typography>
              {course.grade && (
                <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  {course.grade}
                </Typography>
              )}
            </Box>
            
            <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
              {course.description}
            </Typography>

            {course.technologies && course.technologies.length > 0 && (
              <Box>
                <Typography variant="subtitle2" gutterBottom sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Technologies:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                  {course.technologies.map((tech) => (
                    <Chip 
                      key={tech} 
                      label={tech} 
                      size="small" 
                      variant="outlined"
                      sx={{
                        color: "#fff",
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        fontSize: "0.8rem",
                        "& .MuiChip-label": {
                          fontSize: "0.8rem"
                        },
                        "&:hover": {
                          borderColor: "rgba(255, 255, 255, 0.5)"
                        }
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            )}

            {course.skills && course.skills.length > 0 && (
              <Box>
                <Typography variant="subtitle2" gutterBottom sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Skills:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                  {course.skills.map((skill) => (
                    <Chip 
                      key={skill} 
                      label={skill} 
                      size="small"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "#fff",
                        fontSize: "0.8rem",
                        "& .MuiChip-label": {
                          fontSize: "0.8rem"
                        },
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.2)"
                        }
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};