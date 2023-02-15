import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import '../src/global.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp
