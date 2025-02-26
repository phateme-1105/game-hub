import useData from "./useData";
export interface Genre {
  id: number;
  name: string;
}

const useGnres = () => useData<Genre>("/genres");

export default useGnres;
