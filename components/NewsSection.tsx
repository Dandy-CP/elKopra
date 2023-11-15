import React from "react";
import { Container, Text, Divider, Flex, Box, Skeleton } from "@mantine/core";
import CardNews from "./partials/CardNews";
import { GetNews } from "@/service/API/News/news.query";
import ErrorView from "./partials/ErrorView";

const NewsSection = () => {
  const {
    data: newsList,
    isError,
    error,
    isFetching,
    refetch,
  } = GetNews({
    q: "tesla",
    from: "2023-10-15",
    sortBy: "publishedAt",
  });

  return (
    <Container size="xl" mt={50}>
      <Flex direction="column" justify="center" align="center">
        <Text fz={48} fw={700} ta="center">
          Latest News
        </Text>
        <Divider size={5} w="10%" color="#E78448" />
      </Flex>

      <Text fz={18} c="#A1A1A1" ta="center" mt={20}>
        At elKopra we are committed to providing top-notcto cater to all your
        needs. Our team of dedicated professionals is passionate about
        delivering <br /> exceptional solutions that exceed expectations.
      </Text>

      <Box>
        {isFetching && (
          <Flex justify="center" gap={30} mt={50}>
            {Array(3)
              .fill(3)
              .map((_, index) => (
                <Skeleton key={index} width={350} height={400} radius={16} />
              ))}
          </Flex>
        )}

        {isError ? (
          <ErrorView error={error} refetch={refetch} />
        ) : (
          <Flex justify="center" gap={30} mt={50}>
            {newsList?.articles?.slice(0, 3)?.map((value, index) => (
              <CardNews key={index} valueNews={value} />
            ))}
          </Flex>
        )}
      </Box>
    </Container>
  );
};

export default NewsSection;
