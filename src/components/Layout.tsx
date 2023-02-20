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
            <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                <motion.div
                    key={asPath}
                    className="w-full min-h-screen"
                    initial={{ y: 500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 500, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
            <Footer />
        </>
    );
}

export default Layout;