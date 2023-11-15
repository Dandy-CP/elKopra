import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { queryFetch } from "@/config/queryClient";
import { ApiError } from "next/dist/server/api-utils";
import { ParamsNews, NewsResponse } from "@/types/news.types";

export function GetNews(
  params?: ParamsNews,
  options?: UseQueryOptions<NewsResponse, ApiError>
) {
  return useQuery<NewsResponse, ApiError>({
    queryKey: ["news"],
    queryFn: async () => {
      return await queryFetch({
        url: "everything",
        inputParams: {
          q: params?.q,
          from: params?.from,
          sortBy: params?.sortBy,
        },
      });
    },
    ...options,
  });
}
