import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandAbleText from "../components/ExpandAbleText";
import GameAtributes from "../components/GameAtributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandAbleText>{data?.description_raw}</ExpandAbleText>
      <GameAtributes game={data} />
      <GameTrailer gameId={data.id} />
    </>
  );
};

export default GameDetailPage;
