import { Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box"; //rkzy fel import bta3 el boxxxxxxxxxxxxxxxxxx
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getData } from "../../services/getData";
import { deleteData } from "../../services/deleteData";

export default function Home() {
  let totalPrice = 0;
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await getData();
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      {data.map((item) => {
        totalPrice += item.price;

        return (
          <Paper
            key={item.id}
            sx={{
              width: "280px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "25px",
              pt: "25px",
              pb: "5px",
              position: "relative",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3rem" }} variant="h6">
              {item.title}
            </Typography>
            <Typography
              sx={{ mr: "35px", fontSize: "1.4rem", opacity: "0.5" }}
              variant="h6"
            >
              ${item.price}
            </Typography>
            <IconButton
              onClick={() => {
                // console.log(item.id);
                deleteData(item.id, fetchData);
              }}
              sx={{ position: "absolute", top: "0px", right: "0px" }}
            >
              <CloseIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography variant="h6" mt={8} textAlign={"center"}>
        &#128073; You Spend ${totalPrice}
      </Typography>
    </Box>
  );
}

// ml == mui
// marginLeft == html elements
