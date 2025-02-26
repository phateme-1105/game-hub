import useGnres from "../hooks/useGenres";
import useData from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGnres();
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
