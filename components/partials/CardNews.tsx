import React from "react";
import { Paper, Text, Box, Anchor, Image } from "@mantine/core";
import { News } from "@/types/news.types";

interface IProps {
  valueNews: News;
}

const CardNews = ({ valueNews }: IProps) => {
  return (
    <Paper withBorder radius={16} w={350} style={{ borderColor: "#3813D7" }}>
      <Image
        src={valueNews.urlToImage}
        fallbackSrc="https://placehold.co/200x200?text=cannot show image"
        alt=""
        width={200}
        height={200}
        style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
      />

      <Box p={20}>
        <Text fz={24} c="#3D3D3D" fw={700} truncate="end">
          {valueNews.title}
        </Text>

        <Text fz={12} fw={500} c="#ADADAD" h={150} mt={10}>
          {valueNews.description}
        </Text>

        <Anchor
          href={valueNews.url}
          target="_blank"
          fz={16}
          fw={700}
          c="#A3A0AE"
          mt={20}
        >
          Learn More...
        </Anchor>
      </Box>
    </Paper>
  );
};

export default CardNews;
