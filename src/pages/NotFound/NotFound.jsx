import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  const Theme = useTheme();
  return (
    <Box>
      <Typography variant="h5" sx={{ color: Theme.palette.error.main }}>
        There is not design yet :(
        <br />
      </Typography>
    </Box>
  );
}
