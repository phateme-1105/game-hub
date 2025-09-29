import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Text, Box, Heading, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  console.log(data);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText text={data.description_raw} maxChars={400} />
    </>
  );
};

export default GameDetailPage;
