import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { postData } from "../../services/postData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// gbt button already component exist =======> and make a customButton
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.wafaa.main,
  "&:hover": {
    backgroundColor: theme.palette.wafaa.main,
  },
}));

export default function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  return (
    <Box component="form" sx={{ width: "280px" }} autoComplete="off">
      <TextField
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        label="Transaction Title"
        fullWidth
        sx={{ mt: "20px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">&#128073;</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />

      <TextField
        onChange={(e) => {
          setPrice(Number(e.target.value));
        }}
        label="Amount"
        fullWidth
        sx={{ mt: "20px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />

      {/* custom button */}
      <ColorButton
        onClick={() => {
          postData(title, price);
          navigate("/");
        }}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit
        <KeyboardArrowRightIcon />
      </ColorButton>
    </Box>
  );
}
