import React from "react";
import Image from "next/image";
import { Box, Button, Text, Title, Flex, Container } from "@mantine/core";
import Header from "./Header";
import HeroImage from "@/public/png/hero-image.png";

const HeroSection = () => {
  return (
    <React.Fragment>
      <Box bg="#4830B0" w="100vw" h="75vh">
        <Header />

        <Container size="xl" pt={30}>
          <Flex justify="space-between" align="center">
            <Box>
              <Title order={2} fz={72} fw={700} c="white">
                Generate{" "}
                <Text span c="#EC9109" inherit>
                  New
                </Text>
              </Title>

              <Text fz={72} fw={700} c="white">
                Digital Cooperation
              </Text>

              <Text fz={24} c="white">
                We design and build solutions by connecting ideas and <br />
                technologhy to solve problems and get new ideas to <br />{" "}
                business lifecycle.
              </Text>

              <Button color="#EC9109" radius="xl" h={48} w={180} mt={20}>
                Get Started
              </Button>
            </Box>

            <Image src={HeroImage} alt="" height={500} />
          </Flex>
        </Container>
      </Box>

      <Box
        bg="#4830B0"
        w="100vw"
        h="10vh"
        style={{ borderRadius: "0 0 100% 100%" }}
      />
    </React.Fragment>
  );
};

export default HeroSection;
