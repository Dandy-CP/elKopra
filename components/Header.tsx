import React from "react";
import Image from "next/image";
import { Box, Container, Text, Flex, NavLink, Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Logo from "@/public/svg/logo.svg";
import IndoSVG from "@/public/svg/indonesia.svg";

const Header = () => {
  const menu = [
    {
      label: "About Us",
      link: "#about-us",
    },
    {
      label: "Product",
      link: "#about-us",
    },
    {
      label: "Project",
      link: "#about-us",
    },
    {
      label: "Career",
      link: "#about-us",
    },
  ];

  return (
    <Box bg="#4830B0">
      <Container size="xl" p={20}>
        <Flex justify="space-between" align="center">
          <Image src={Logo} alt="" />

          <Flex align="center" gap={30}>
            <Flex>
              {menu.map((value, index) => (
                <NavLink
                  key={index}
                  label={value.label}
                  fw={700}
                  fz={18}
                  ta="center"
                  c="#D6D6D6"
                  style={{
                    width: 100,
                    color: "white",
                    borderRadius: 8,
                    zIndex: 99,
                  }}
                />
              ))}
            </Flex>

            <Button variant="outline" color="white" radius="xl">
              Contact Us
            </Button>

            <Flex gap={10}>
              <Image src={IndoSVG} alt="" />
              <IconChevronDown color="white" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
