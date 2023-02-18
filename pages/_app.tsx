import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@components/Layout";
import theme from "@definitions/chakra/theme";
import { NavBar } from "@sections/NavBar";
import { AnimatePresence } from "framer-motion";
import '../src/global.css';


function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component className='w-screen h-screen mt-32 bg-white' {...pageProps} key={router.asPath} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp
