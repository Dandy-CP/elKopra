import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/config/queryClient";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        {router.pathname !== "/_error" ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </MantineProvider>
    </QueryClientProvider>
  );
}
