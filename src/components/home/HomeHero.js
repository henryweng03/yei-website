import React from "react";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";

export default function HomeHero({ classes }) {
  return (
    <Box className={classes.hero}>
      <Container fixed>
        <Grid
          style={{
            minHeight: "100vh",
            marginTop: `-${window.innerWidth > 600 ? 64 : 56}px`,
            padding: window.innerWidth > 960 ? "6.42em 0 4.2em 0" : "4.2em 0",
          }}
          className={classes.heroGrid}
          container
          justify="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h3" className={classes.title}>
              Launchpad for Student Economists
            </Typography>
            <Typography variant="h4" className={classes.slogan}>
              World's largest coalition of high school economics clubs.
            </Typography>
          </Grid>
          <Box mt={2}>
            <Grid item>
              <Box display="inline-block" mr={1} mb={1}>
                <Button
                  className={`${classes.ctaBtn} ${classes.mainCta}`}
                  variant="contained"
                  size="large"
                >
                  Register a Club
                </Button>
              </Box>
              <Button
                className={classes.ctaBtn}
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => {
                  document
                    .querySelector("#home-about")
                    .scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                About Us
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
