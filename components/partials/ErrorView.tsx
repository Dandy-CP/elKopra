import React from "react";
import { Paper, Flex, Text, Button } from "@mantine/core";
import { ApiError } from "next/dist/server/api-utils";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";
import { NewsResponse } from "@/types/news.types";

interface IProps {
  error: ApiError;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<NewsResponse, ApiError>>;
}

const ErrorView = ({ error, refetch }: IProps) => {
  return (
    <Paper bg="gray" p={20} radius={16} mt={50}>
      <Flex direction="column" align="center">
        <Text c="white" fz={26} fw={700}>
          Oppss.. Something Wrong
        </Text>

        <Text c="yellow" fw={700} mt={10}>
          {error?.message}
        </Text>

        <Button
          color="#EC9109"
          radius="xl"
          h={48}
          w={180}
          mt={20}
          onClick={() => {
            refetch();
          }}
        >
          Try Again
        </Button>
      </Flex>
    </Paper>
  );
};

export default ErrorView;
