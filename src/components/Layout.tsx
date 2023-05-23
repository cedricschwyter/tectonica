import Footer from "@sections/Footer";
import { NavBar } from "@sections/NavBar";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    const { asPath } = useRouter();
    return (
        <>
            <NavBar />
            <div
                className="fixed top-0 left-0 grid w-full min-h-screen grid-cols-12 -z-10 grid-rows-6 shadow-lg"
                style={{
                    backgroundImage:
                        "url(https://unsplash.com/photos/8KfCR12oeUM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc2ODAxMzU1&force=true&w=2400)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            ></div>
            {children}
            <Footer />
        </>
    );
};

export default Layout;
