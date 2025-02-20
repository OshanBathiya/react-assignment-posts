import React from "react";
import { TextField } from "@mui/material";

function SerachBar({ searchQuery, setSearchQuery }) {
  return (
    <TextField
      label="Search ..."
      variant="outlined"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      fullWidth
      sx={{ mb: 2 }}
    />
  );
}

export default SerachBar;
