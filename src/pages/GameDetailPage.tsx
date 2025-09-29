import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Text, Box, Heading, Spinner } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, error, isLoading } = useGame(slug!);

  console.log(data);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
