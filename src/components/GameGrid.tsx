import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkelaton from "./GameCardSkelaton";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGames(gameQuery);
  const skelatons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skelatons.map((skelaton) => (
            <GameCardContainer key={skelaton}>
              <GameCardSkelaton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button my={2} onClick={() => fetchNextPage()}>
          Load more
        </Button>
      )}
    </>
  );
};

export default GameGrid;
