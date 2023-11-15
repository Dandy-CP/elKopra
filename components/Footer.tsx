import React from "react";
import Image from "next/image";
import { Container, Flex, Text, Box, Anchor } from "@mantine/core";
import Logo from "@/public/svg/logo.svg";
import LocationSVG from "@/public/svg/locationtick.svg";
import PhoneSVG from "@/public/svg/call.svg";
import EmailSVG from "@/public/svg/mail.svg";
import LinkedInSVG from "@/public/svg/linkedin.svg";
import InstagramSVG from "@/public/svg/instagram.svg";
import FacebookSVG from "@/public/svg/facebook.svg";
import YoutubeSVG from "@/public/svg/youtube.svg";

const Footer = () => {
  const detailCompany = [
    {
      icon: LocationSVG,
      valueInfo: "Jl. Terusan Jakarta No.76, Antapani",
      line2: "Tengah, Bandung,Jawa Barat, 40291",
    },
    {
      icon: PhoneSVG,
      valueInfo: "+62 356 7829 873",
    },
    {
      icon: EmailSVG,
      valueInfo: "elkopra@gmail.com",
    },
  ];

  const company = [
    {
      label: "About Us",
      link: "#",
    },
    {
      label: "Career",
      link: "#",
    },
    {
      label: "Contact Us",
      link: "#",
    },
  ];

  const product = [
    {
      label: "elKopra",
      link: "#",
    },
    {
      label: "elRaga",
      link: "#",
    },
    {
      label: "elResto",
      link: "#",
    },
  ];

  const findUs = [
    {
      icon: LinkedInSVG,
    },
    {
      icon: InstagramSVG,
    },
    {
      icon: FacebookSVG,
    },
    {
      icon: YoutubeSVG,
    },
  ];

  return (
    <Box bg="#6444F0" h={450}>
      <Container size="xl" h={450}>
        <Flex h={450} direction="row" justify="space-between" align="center">
          <Box>
            <Image src={Logo} alt="" />

            <Flex direction="column" gap={20} mt={20}>
              {detailCompany.map((value, index) => (
                <Flex key={index} gap={10}>
                  <Image src={value.icon} alt="" />
                  <Text fz={16} c="white">
                    {value.valueInfo}
                    <br />
                    {value?.line2}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>

          <Flex direction="row" gap={100}>
            <Flex direction="column">
              <Text fz={22} fw={700} mb={20} c="white">
                Company
              </Text>

              {company.map((value, index) => (
                <Anchor key={index} href={value.link} c="white" mb={20}>
                  {value.label}
                </Anchor>
              ))}
            </Flex>

            <Flex direction="column">
              <Text fz={22} fw={700} mb={20} c="white">
                Product
              </Text>

              {product.map((value, index) => (
                <Anchor key={index} href={value.link} c="white" mb={20}>
                  {value.label}
                </Anchor>
              ))}
            </Flex>

            <Flex direction="column">
              <Text fz={22} fw={700} mb={20} c="white">
                Find Us
              </Text>

              <Flex gap={20}>
                {findUs.map((value, index) => (
                  <Image key={index} src={value.icon} alt="" />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
