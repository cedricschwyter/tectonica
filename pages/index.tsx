import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { ReactElement, useEffect, useRef } from 'react';
import { NavBar } from '@sections/NavBar';
import Footer from '@sections/Footer';
import PageTitle from '@components/PageTitle';
import { AnimationControls, motion, MotionValue, useInView, useScroll, useTransform } from "framer-motion";
import { isMobile } from 'react-device-detect'; // TODO: May be useful to disable vid on mobile
import Background from '@components/Background'; // TODO: my mac doesn't like this but looks cool
import Vision from '@sections/Vision';
import Philosophie from '@sections/Philosophie';
import Karriere from '@sections/Karriere';
import Team from '@sections/Team';
import Hero from '@sections/Hero';



// TODO: Find Better images
const imageUrls = [
    'https://unsplash.com/photos/HOWfdzh1Q0g/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fGdyZWVuJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTY3Njg4MTE5NQ&force=true',
    'https://images.unsplash.com/photo-1553946550-4b8f3eea5451?ixlib=rb-4.0.3&ix',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://unsplash.com/photos/h2yOqTOFu1w/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgxOTk&force=true',
]

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
const SectionLandingContainer = ({ image, children, hashId }: SectionLandingProps) => {
    let ref = useRef(null);

    // TODO: Parralax stuff not used right now
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    const isInView = useInView(ref, { amount: 'some', once: false });
    let childRef;

    useEffect(() => { // TODO: this is probably bugged idk
        if (ref) {
            ref = childRef;
        }
    }, [ref, childRef]);

    return (
        <section className='min-h-screen' id={hashId}>
            <span ref={ref}></span>
            {children}
        </section>
    )
}

const LandingPage = () => {
    return (
        <>
            <PageTitle title={"tectonica | Baurealisationen"} />
            <section id="hero" className="min-h-screen">
                <Hero />
            </section>
            <section id="philosophie" className="min-h-screen">
                <Philosophie />
            </section>
            <section id="vision" className="min-h-screen">
                <Vision />
            </section>
            <section id="team" className="min-h-screen">
                <Team />
            </section>
            <section id="Karriere" className="min-h-screen">
                <Karriere />
            </section>
        </>
    );
}

export default LandingPage;
