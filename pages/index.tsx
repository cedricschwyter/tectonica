import PageTitle from "@components/PageTitle";
import Vision from "@sections/Vision";
import Karriere from "@sections/Karriere";
import Team from "@sections/Team";
import Hero from "@sections/Hero";

const LandingPage = () => {
    return (
        <>
            <PageTitle title={"tectonica | Baurealisationen"} />
            <section id="hero" className="min-h-screen">
                <Hero />
            </section>
            <section id="vision" className="min-h-screen">
                <Vision />
            </section>
            <section id="team" className="min-h-screen">
                <Team />
            </section>
            <section id="karriere" className="min-h-screen">
                <Karriere />
            </section>
        </>
    );
};

export default LandingPage;
