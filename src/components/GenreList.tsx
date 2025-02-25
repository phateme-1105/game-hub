import React from "react";
import useGnres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGnres();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
