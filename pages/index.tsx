import {
    Flex,
    Text,
    Icon,
    useBreakpointValue,
} from '@chakra-ui/react';
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
        <section className='h-screen max-w-screen max-h-screen overflow-auto'>
            <Flex
                className='h-full w-full transition-all flex flex-row justify-center align-middle items-center'

                backgroundImage={
                    'url(' + image + ')'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
            >
                <span ref={ref}></span>
                {children}
            </Flex>
        </section>
    )
}

const LandingPage = () => {
    return (
        <>
            <PageTitle title={"tectonica | Baurealisationen"} />
            {/* <Background /> 
            TODO: Remove experiment

            */}
            <Flex flexDirection="column">
                <NavBar />
                <SectionLandingContainer image={''} id={4} key={4}>
                    {/* <div id="filter" className='bg-black/40 w-screen h-screen absolute z-10'></div> */}
                    <video muted loop autoPlay className='h-screen w-full object-cover z-0 absolute brightness-75'>
                        <source src="/video/construction-site01.mp4" type="video/mp4" />
                    </video>
                    <div className='z-10 m-5'>
                        <h1 className='sm:text-9xl text-7xl  z-10 text-accent'>
                            tectonica
                        </h1>
                        <Text
                            className='z-10 p-10 sm:p-20'
                            color={'white'}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                        >
                            können wir das schaffen?
                            Yo wir schaffen das!
                        </Text>
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



                <Footer />
            </Flex>
        </>
    );
}

export default LandingPage;