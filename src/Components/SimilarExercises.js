import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Typography, Box, Stack } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  const [similarCurrentPage, setSimilarCurrentPage] = useState(1);
  const [equipmentCurrentPage, setEquipmentCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  const indexOfLastSimilarExercise = similarCurrentPage * exercisesPerPage;
  const indexOfFirstSimilarExercise =
    indexOfLastSimilarExercise - exercisesPerPage;
  const currentSimilarExercises = targetMuscleExercises.slice(
    indexOfFirstSimilarExercise,
    indexOfLastSimilarExercise
  );

  const indexOfLastEqipmentExercise = equipmentCurrentPage * exercisesPerPage;
  const indexOfFirstEqipmentExercise =
    indexOfLastEqipmentExercise - exercisesPerPage;
  const currentEquipmentExercises = equipmentExercises.slice(
    indexOfFirstEqipmentExercise,
    indexOfLastEqipmentExercise
  );

  const similarPaginate = (event, value) => {
    setSimilarCurrentPage(value);
    const exercisesSection = document.getElementById("similar");
    if (exercisesSection) {
      exercisesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const equipmentPaginate = (event, value) => {
    setEquipmentCurrentPage(value);
    const exercisesSection = document.getElementById("equipment");
    if (exercisesSection) {
      exercisesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!currentSimilarExercises.length) return <Loader />;
  if (!currentEquipmentExercises.length) return <Loader />;
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" , sm: '10px'} }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "50px" }}
        fontWeight={700}
        color="#000"
        id="similar"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises.length !== 0 ? (
          <Box id="exercises" sx={{ mt: { lg: "100px" } }} mt="50px" p="20px">
            <Stack
              direction="row"
              sx={{ gap: { lg: "107px", xs: "50px" } }}
              flexWrap="wrap"
              justifyContent="center"
            >
              {currentSimilarExercises.map((exercise, idx) => (
                <ExerciseCard key={idx} exercise={exercise} />
              ))}
            </Stack>
            {/* // <HorizontalScrollbar data={targetMuscleExercises} /> */}
            <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(
                  targetMuscleExercises.length / exercisesPerPage
                )}
                page={similarCurrentPage}
                onChange={similarPaginate}
                size="large"
              />
            </Stack>
          </Box>
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "50px",
          mt: { lg: "100px", xs: "60px" },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
        id="equipment"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {equipmentExercises.length !== 0 ? (
          // <HorizontalScrollbar data={equipmentExercises} />
          <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
            <Stack
              direction="row"
              sx={{ gap: { lg: "107px", xs: "50px" } }}
              flexWrap="wrap"
              justifyContent="center"
            >
              {currentEquipmentExercises.map((exercise, idx) => (
                <ExerciseCard key={idx} exercise={exercise} />
              ))}
            </Stack>
            {/* // <HorizontalScrollbar data={targetMuscleExercises} /> */}
            <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(equipmentExercises.length / exercisesPerPage)}
                page={equipmentCurrentPage}
                onChange={equipmentPaginate}
                size="large"
              />
            </Stack>
          </Box>
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
