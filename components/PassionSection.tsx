import React from "react";
import { Box, Container, Text, Title, Divider, Flex } from "@mantine/core";
import MessageSVG from "@/public/svg/chat.svg";
import GroupSVG from "@/public/svg/people.svg";
import TodoSVG from "@/public/svg/todo.svg";
import Image from "next/image";

const PassionSection = () => {
  const options = [
    {
      value: "98%",
      title: "Possitive Feedback",
      icon: MessageSVG,
    },
    {
      value: "120",
      title: "Enthusiastic Fulltime Employee",
      icon: GroupSVG,
    },
    {
      value: "20",
      title: "Projects Completed",
      icon: TodoSVG,
    },
  ];

  return (
    <React.Fragment>
      <Box
        bg="#4830B0"
        w="100vw"
        h="25vh"
        mt={100}
        style={{ borderRadius: "100% 100% 0 0" }}
      />

      <Box bg="#4830B0" w="100vw" h="90vh">
        <Container size="xl">
          <Text c="white" fz={24} fw={500} ta="center">
            Lorem ipsum dolot amet lorem ipsum
          </Text>

          <Flex direction="column" justify="center" align="center">
            <Title order={2} fz={48} fw={700} c="white" ta="center" mt={20}>
              Our{" "}
              <Text span c="#EC9109" inherit>
                Passion{" "}
              </Text>
              What We Do.
            </Title>

            <Divider size={5} w="10%" color="#E78448" mt={10} />
          </Flex>

          <Flex justify="space-evenly" mt={100}>
            {options.map((value, index) => (
              <Flex
                key={index}
                direction="column"
                justify="center"
                align="center"
              >
                <Image src={value.icon} alt="" />
                <Text fz={60} fw={700} c="white">
                  {value.value}
                </Text>
                <Text fz={24} fw={500} mt={20} c="white">
                  {value.title}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default PassionSection;
