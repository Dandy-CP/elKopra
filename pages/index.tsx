import React from "react";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import PassionSection from "@/components/PassionSection";
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>elKopra</title>
      </Head>

      <HeroSection />
      <NewsSection />
      <PassionSection />
      <SubscribeSection />
    </React.Fragment>
  );
}
