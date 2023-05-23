import PageTitle from "@components/PageTitle";
import Vision from "@sections/Vision";
import Karriere from "@sections/Karriere";
import Team from "@sections/Team";
import Hero from "@sections/Hero";

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
            <section id="karriere">
                <Karriere />
            </section>
        </>
    );
};

export default LandingPage;
