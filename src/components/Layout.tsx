import Footer from "@sections/Footer";
import { NavBar } from "@sections/NavBar";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <NavBar />
            <div className="min-h-screen p-5">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;