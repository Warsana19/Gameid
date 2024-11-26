import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandAbleText from "../components/ExpandAbleText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandAbleText>{data?.description_raw}</ExpandAbleText>
    </>
  );
};

export default GameDetailPage;
