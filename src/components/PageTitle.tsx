import Head from "next/head"

const PageTitle = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}
export default PageTitle;