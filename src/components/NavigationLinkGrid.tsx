import styles from "@/app/page.module.css";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Stack } from "@mui/system";
import { NavigationLink_T } from "@/types/NavigationLink";

interface NavigationLinkGridProps {
  links: NavigationLink_T[];
  sx?: any;
}

/**
 * Displays a grid of next Links
 * @constructor
 */
export const NavigationLinkGrid = ({
  links,
  sx = {},
}: NavigationLinkGridProps) => {
  const getLink = (link: NavigationLink_T): string => {
    return link?.href ? link.href : `#${link.id}`;
  };

  return (
    <Grid container spacing={2} sx={sx}>
      {
        // @ts-ignore
        links.map((link) => (
          <Grid
            item
            key={getLink(link)}
            className={styles.card}
            lg={3}
            md={6}
            sm={12}
            xs={12}
          >
            <Link href={getLink(link)}>
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
            </Link>
          </Grid>
        ))
      }
    </Grid>
  );
};
