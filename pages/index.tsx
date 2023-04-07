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
      <div
        id="vision"
        className="fixed top-0 left-0 grid w-full min-h-screen grid-cols-12 grid-rows-6 shadow-lg"
        style={{
          backgroundImage:
            "url(https://unsplash.com/photos/8KfCR12oeUM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc2ODAxMzU1&force=true&w=2400)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
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
};

export default LandingPage;
