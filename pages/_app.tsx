import Layout from "@components/Layout";
import { NavBar } from "@sections/NavBar";
import { AnimatePresence } from "framer-motion";
import '../src/global.css';


function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Layout>
        <Component className='w-screen h-screen mt-32 bg-white' {...pageProps} key={router.asPath} />
      </Layout>
    </>
  );
}

export default MyApp
