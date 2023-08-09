import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart }) => {

  const bodyPartIcons = {
    all: require("../assets/icons/all.png"),
    back: require("../assets/icons/back.png"),
    cardio: require("../assets/icons/cardio.png"),
    chest: require("../assets/icons/chest.png"),
    'lower arms': require("../assets/icons/lowerArms.png"),
    'lower legs': require("../assets/icons/lowerLegs.png"),
    neck: require("../assets/icons/back.png"),
    shoulders: require("../assets/icons/shoulders.png"),
    'upper arms': require("../assets/icons/upperArms.png"),
    'upper legs': require("../assets/icons/upperlegs.png"),
    waist: require("../assets/icons/waist.png")
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        borderwidth: "2px",
        boxShadow: 3,
        m: "20px",
        border: "2px solid transparent",
        transition: "border-color 0.3s, transform 0.3s",
      }}
      onClick={() => {
        setBodyPart(item);
        const exercisesSection = document.getElementById("exercises");
        if (exercisesSection) {
          exercisesSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <img
        src={bodyPartIcons[item]}
        alt={`${item} icon`}
        style={{ width: "100px", height: "100px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
