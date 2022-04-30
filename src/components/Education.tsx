import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Grid, Stack, useMediaQuery } from "@mui/material";
import { fontSize } from "@mui/system";

export default function Education() {
  const mobileScreen = useMediaQuery("(max-width:426px)");
  const lapTopScreen = useMediaQuery("(max-width:1024px)");
  const tabScreen = useMediaQuery("(max-width:769px)");
  return (
    <Timeline>
      <TimelineItem sx={{ "&:before": { flex: "0" } }}>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Stack>
            <Box sx={{ fontWeight: "700" }}>
              <Grid container>
                <Grid
                  item
                  xs={mobileScreen ? 12 : 3}
                  sx={{ fontSize: `${tabScreen ? "1rem" : "1.2rem"}` }}
                >
                  OCT-2021-JUN-2022
                </Grid>
                <Grid item xs={mobileScreen ? 12 : 9}>
                  <Box
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "900",
                      color: "primary.main",
                      position: "relative",
                      textTransform: "capitalize",
                      "&:before": {
                        content: `''`,
                        position: "absolute",
                        width: `${lapTopScreen ? "0px" : "40px"}`,
                        height: "2px",
                        backgroundColor: `secondary.main`,
                        left: "-65px",
                        top: "15px",
                      },
                    }}
                  >
                    {" "}
                    <Box
                      sx={{
                        textTransform: "capitalize",
                        fontSize: `${mobileScreen ? "1rem" : "1.2rem"}`,
                      }}
                    >
                      {" "}
                      Diploma of computer science
                    </Box>
                  </Box>
                  Information Technology Institute
                  <Box sx={{ color: "secondary.main", textAlign: "start" }}>
                    The program is offered as a full-fledged scholarship for
                    selected Egyptian university graduates within five calendar
                    years of their graduation. It acts as a catalyst to bridge
                    the gap between the talent supply skills and the domestic,
                    regional, and international market demands. The program is
                    offered as a full-fledged scholarship for selected Egyptian
                    university graduates within five calendar years of their
                    graduation. It acts as a catalyst to bridge the gap between
                    the talent supply skills and the domestic, regional, and
                    international market demands.{" "}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ "&:before": { flex: "0" } }}>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Stack>
            <Box sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
              <Grid container>
                <Grid
                  item
                  xs={mobileScreen ? 12 : 3}
                  sx={{ fontSize: `${tabScreen ? "1rem" : "1.2rem"}` }}
                >
                  OCT-2013-JUN-2017
                </Grid>
                <Grid item xs={mobileScreen ? 12 : 9}>
                  <Box
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "900",
                      color: "primary.main",
                      position: "relative",
                      textTransform: "capitalize",
                      "&:before": {
                        content: `''`,
                        position: "absolute",
                        width: `${lapTopScreen ? "0px" : "40px"}`,
                        height: "2px",
                        backgroundColor: `secondary.main`,
                        left: "-65px",
                        top: "15px",
                      },
                    }}
                  >
                    {" "}
                    <Box
                      sx={{
                        fontSize: `${mobileScreen ? "1rem" : "1.2rem"}`,
                        textTransform: "capitalize",
                      }}
                    >
                      Bachelor of computer science
                    </Box>
                  </Box>
                  <Box sx={{ textTransform: "capitalize" }}>
                    {" "}
                    Faculty of science
                  </Box>
                  <Box sx={{ color: "secondary.main", textAlign: "start" }}>
                    The Faculty of Computer Science offers a B.Sc. Degree
                    adopting international standards to fulfill such
                    requirements. the Faculty of Computer Science at MSA
                    provides an up-to-date program that satisfies the needs of
                    the local market. Due to the demand for a new generation of
                    high level computer specialists and professionals
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
