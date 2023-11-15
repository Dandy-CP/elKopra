import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import qs from "querystring";
import {
  QueryFetchOptions,
  ApiError,
  MutationFetchOptions,
} from "@/types/client.types";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 45000,
  headers: {
    Accept: "application/json",
  },
  params: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export async function queryFetch({
  url,
  inputParams,
}: QueryFetchOptions): Promise<any> {
  let params = "";

  if (inputParams) {
    params = qs.stringify(inputParams);
  }

  return new Promise(async (resolve, reject) => {
    try {
      let fetchUrl = url;

      if (params) {
        fetchUrl += "?" + params;
      }

      const res = await client.get(fetchUrl);
      const json = await res.data;

      resolve(json);
    } catch (e: any) {
      reject(e.response.data as ApiError);
    }
  });
}

export async function mutationFetch({
  url,
  method,
  body,
  baseURL,
}: MutationFetchOptions): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await client.request({
        ...(!!baseURL && { baseURL }),
        url,
        method,
        headers: {
          "Content-Type": "application/json",
        },
        data: body,
      });

      const json = await res.data;

      resolve(json);
    } catch (e: any) {
      reject(e.response.data as ApiError);
    }
  });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
