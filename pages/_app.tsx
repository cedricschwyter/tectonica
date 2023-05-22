import Layout from "@components/Layout";
import '../src/global.css';


function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <meta name="robots" content="noindex,nofollow" />

            <Layout data-theme="tectonica">
                <Component className='mt-32 bg-white' {...pageProps} key={router.asPath} />
            </Layout>
        </>
    );
}

export default MyApp
