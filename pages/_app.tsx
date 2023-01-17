import { ChakraProvider } from "@chakra-ui/react";
import Background from "@components/Background";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp
