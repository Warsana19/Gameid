import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get("/platforms/lists/parents").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
