import React from "react";
import { CircularProgress, Box } from "@mui/material";

function DayCalendarSkeleton() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
      <CircularProgress />
    </Box>
  );
}

export default DayCalendarSkeleton;
