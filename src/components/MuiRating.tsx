import { Stack, Rating } from "@mui/material";
import React from "react";
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  console.log({ value });

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        icon={<FavoriteIcon color="error" fontSize="inherit"/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        size="large"
        // highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
