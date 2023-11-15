import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Paper,
  Text,
  Input,
  Button,
  Anchor,
} from "@mantine/core";
import FigureImage from "@/public/png/figure.png";

const SubscribeSection = () => {
  return (
    <Box bg="#4830B0" pb={100}>
      <Container size="xl">
        <Paper bg="#6444F0" radius={16} h={380} p={50} pos="relative">
          <Box mt="md">
            <Text fz={40} fw={700} mb={10} c="white">
              Subscribe news letter
            </Text>

            <Text fz={18} c="white" mb={20}>
              Using a combination of technology, process and talents we focus on
              our users needs and <br /> help to accelerate their business at
              any scale. We deliver consistent
            </Text>

            <Input
              placeholder="Input Email"
              radius={100}
              w={550}
              mb={15}
              mt={15}
              size="lg"
              rightSection={
                <Button size="lg" color="#EC9109" radius={100}>
                  Send Email
                </Button>
              }
            />

            <Text c="white">
              This site is protected by reCAPTCHA and the Google{" "}
              <Anchor
                href="https://policies.google.com/privacy"
                target="_blank"
                c="white"
                inherit
                td="underline"
              >
                Privacy Policy{" "}
              </Anchor>
              and{" "}
              <Anchor
                href="https://policies.google.com/terms"
                target="_blank"
                c="white"
                inherit
                td="underline"
              >
                Terms of Service{" "}
              </Anchor>
              apply.
            </Text>
          </Box>

          <Image
            src={FigureImage}
            alt=""
            height={700}
            style={{ position: "absolute", right: -100, top: -320 }}
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default SubscribeSection;
