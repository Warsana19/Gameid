import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandAbleText from "../components/ExpandAbleText";
import GameAtributes from "../components/GameAtributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{data?.name}</Heading>
        <ExpandAbleText>{data?.description_raw}</ExpandAbleText>
        <GameAtributes game={data} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={data.id} />
        <GameScreenshot gameId={data.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
