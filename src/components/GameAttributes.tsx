import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  data: Game;
}

const GameAttributes = ({ data }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as={"dl"}>
        <DefinitionItem term="Platforms">
          {data.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Genres">
          {data.genres.map((g) => (
            <Text key={g.id}>{g.name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Metascore">
          <CriticScore score={data.metacritic} />
        </DefinitionItem>

        <DefinitionItem term="Publisher">
          {data.developers.map((d) => (
            <Text key={d.id}>{d.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
