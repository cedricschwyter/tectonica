import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { ReactElement, useEffect, useRef } from "react";
import { NavBar } from "@sections/NavBar";
import Footer from "@sections/Footer";
import PageTitle from "@components/PageTitle";
import {
    AnimationControls,
    motion,
    MotionValue,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";
import { isMobile } from "react-device-detect"; // TODO: May be useful to disable vid on mobile
import Background from "@components/Background"; // TODO: my mac doesn't like this but looks cool
import Vision from "@sections/Vision";
import Philosophie from "@sections/Philosophie";
import Karriere from "@sections/Karriere";
import Team from "@sections/Team";
import Hero from "@sections/Hero";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

interface SectionLandingProps {
    image?: string;
    children?: React.ReactNode;
    animation?: AnimationControls;
    hashId: string;
    childRef?: any;
}
const SectionLandingContainer = ({
    image,
    children,
    hashId,
}: SectionLandingProps) => {
    let ref = useRef(null);

    // TODO: Parralax stuff not used right now
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    const isInView = useInView(ref, { amount: "some", once: false });
    let childRef;

    useEffect(() => {
        // TODO: this is probably bugged idk
        if (ref) {
            ref = childRef;
        }
    }, [ref, childRef]);

    return (
        <section className="min-h-screen" id={hashId}>
            <span ref={ref}></span>
            {children}
        </section>
    );
};

const LandingPage = () => {
    return (
        <>
            <PageTitle title={"tectonica | Baurealisationen"} />
            <section id="hero">
                <Hero />
            </section>
            <section id="vision">
                <Vision />
            </section>
            <section id="team">
                <Team />
            </section>
            <section id="Karriere">
                <Karriere />
            </section>
        </>
    );
};

export default LandingPage;
