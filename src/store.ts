import { create } from "zustand";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforns";

interface GameQuery {
  genre?: Genre | null;
  platform?: Platform | null;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (serchText: string) => void;
  setGenre: (genre: Genre) => void;
  setPlatform: (Platform: Platform) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })), 

  setGenre: (genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),

  setPlatform: (platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
