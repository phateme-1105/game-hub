 // *** Creating a Custom Hook for Fetching Games ***

import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforns";
import { Genre } from "./useGenres";


export interface Game {
  id: number;
  slug: string;
  name: string;
   description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  genres: Genre [];
  developers: Platform [];
}

const useGames = () =>{
const gameQuery = useGameQueryStore(s => s.gameQuery)
  return useQuery<Game[], Error>({

  queryKey: ['games', gameQuery],
  queryFn: () => 
    apiClient
    .get<FetchResponse<Game>>('/games', {
      params: {
        genres: gameQuery.genre?.id, 
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }
    })
    .then(res => res.data.results),
 })
}
 

export default useGames;


