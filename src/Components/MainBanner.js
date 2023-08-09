import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Banner from "../assets/images/banner.png";

const MainBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "180px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        mb="23px"
        mt="30px"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
      >
        Swet, Smile <br /> Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="outlined"
        color="error"
        size="medium"
        href="#exercises"
        sx={{
          padding: "10px",
          fontSize: "20px",
          fontWeight: "600",
          ":hover": {
            bgcolor: "#FF2625",
            color: "#FFFFFF",
          },
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        fontSize="200px"
        sx={{
          opacity: 0.3,
          fontWeight: { xs: "100" },
          fontSize: { xs: "150px" },
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercise
      </Typography>

      <img src={Banner} alt="Banner" className="banner-img" />
    </Box>
  );
};

export default MainBanner;
