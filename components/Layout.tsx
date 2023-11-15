import React from "react";
import { AppShell, Box, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const [scroll] = useWindowScroll();

  return (
    <AppShell style={{ overflow: "hidden" }}>
      <Box
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: rem(60),
          zIndex: 1000000,
          transform: `translate3d(0, ${scroll.y > 200 ? 0 : rem(-110)}, 0)`,
          transition: "transform 400ms ease",
        }}
      >
        <AppShell.Header>
          <Header />
        </AppShell.Header>
      </Box>

      {children}

      <Footer />
    </AppShell>
  );
};

export default Layout;
