import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from "../Components/ExerciseCard";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div className="card-grid">
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyPart ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
