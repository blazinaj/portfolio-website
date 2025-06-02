import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { NavigationLink_T } from "../types/NavigationLink";
import { Link, useNavigate } from "react-router-dom";

interface NavigationLinkGridProps {
  links: NavigationLink_T[];
  sx?: any;
}

/**
 * Displays a grid of links
 */
export const NavigationLinkGrid = ({
  links,
  sx = {},
}: NavigationLinkGridProps) => {
  const navigate = useNavigate();

  const getLink = (link: NavigationLink_T): string => {
    return link?.href ? link.href : `#${link.id}`;
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Handle navigation to anchor links
    if (href.startsWith('#')) {
      // Navigate to the root with the hash
      navigate('/');
      
      // Wait for navigation to complete then scroll to element
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Normal navigation
      navigate(href);
    }
  };

  return (
    <Grid container spacing={2} sx={sx}>
      {links.map((link) => (
        <Grid
          item
          key={getLink(link)}
          className="card"
          lg={3}
          md={6}
          sm={12}
          xs={12}
        >
          <a 
            href={getLink(link)}
            onClick={(e) => handleNavigation(e, getLink(link))}
          >
            <h2>
              <Stack direction={"row"} alignItems="end">
                {link.icon && (
                  <span
                    style={{
                      marginRight: "0.5em",
                    }}
                  >
                    {link.icon}
                  </span>
                )}
                {link.title}
                <span style={{ marginLeft: "0.5em" }}>-&gt;</span>
              </Stack>
            </h2>
            <p>{link.subTitle}</p>
          </a>
        </Grid>
      ))}
    </Grid>
  );
};