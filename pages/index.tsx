import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { ReactElement, useEffect, useRef } from 'react';
import { NavBar } from '@sections/NavBar';
import Footer from '@sections/Footer';
import PageTitle from '@components/PageTitle';
import { AnimationControls, motion, MotionValue, useInView, useScroll, useTransform } from "framer-motion";
import { isMobile } from 'react-device-detect'; // TODO: May be useful to disable vid on mobile
import Background from '@components/Background'; // TODO: my mac doesn't like this but looks cool
import Vision from '@sections/Vision';



// TODO: Find Better images
const imageUrls = [
    'https://unsplash.com/photos/Mzm6gC4tdak/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgxOTk&force=true',
    'https://images.unsplash.com/photo-1553946550-4b8f3eea5451?ixlib=rb-4.0.3&ix',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://unsplash.com/photos/h2yOqTOFu1w/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgxOTk&force=true',
]

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}


interface SectionLandingProps {
    image: string;
    children?: React.ReactNode;
    animation?: AnimationControls;
    id: number;
    childRef?: any;
}
const SectionLandingContainer = ({ image, children, id }: SectionLandingProps) => {
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
        <section className='h-screen max-h-screen overflow-auto max-w-screen'>
            <div
                className='flex flex-row items-center justify-center w-full h-full align-middle transition-all'

                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <span ref={ref}></span>
                {children}
            </div>
        </section>
    )
}

const LandingPage = () => {
    return (
        <>
            <PageTitle title={"tectonica | Baurealisationen"} />
            <div className='flex flex-col'>
                <SectionLandingContainer image={''} id={4} key={4}>
                    {/* <div id="filter" className='absolute z-10 w-screen h-screen bg-black/40'></div> */}
                    <video muted loop className='absolute z-0 object-cover w-full h-screen brightness-75'>
                        <source src="/video/construction-site01.mp4" type="video/mp4" />
                    </video>
                    <div className='z-10 m-5'>
                        <h1 className='z-10 sm:text-9xl text-7xl text-accent'>
                            tectonica
                        </h1>
                        <h2>

                            können wir das schaffen?
                            Yo wir schaffen das!
                        </h2>
                    </div>
                </SectionLandingContainer>
                <SectionLandingContainer image={imageUrls[2]} id={2} key={2} >
                    <Vision />
                </SectionLandingContainer>
                <>
                    {[0, 1].map((id) => (
                        <SectionLandingContainer image={imageUrls[id]} id={id} key={id} />
                    ))}
                </>
            </div>
        </>
    );
}

export default LandingPage;
