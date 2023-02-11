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

interface FeatureProps {
    title: string;
    icon: ReactElement;
    text: string;
}

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

const Feature = ({ title, icon, text }: FeatureProps) => {
    return (
        <div
            style={{
                background: 'linear-gradient(125deg, rgba(0,123,132,.3) 0%, rgba(0,0,0,.7) 100%);'
            }}
            className='t-gradient group backdrop-blur-xl  rounded-xl gap-3  p-4 pt-8 shadow-xl flex justify-start justify-items-start hover:shadow-xl hover:scale-110 transition-all flex-col w-full'>
            <div className='flex justify-left gap-5 justify-items-start flex-col h-full w-full group-hover:z-20 z-10'>
                <span className='flex text-[12rem] justify-center'>
                    {icon}
                </span>
                <Text className='text-white text-center text-3xl' fontWeight={600}>{title}</Text>
                <p className='p-3 text-xl'>
                    {text}
                </p>
            </div>
        </div>
    );
};
interface SectionLandingProps {
    image: string;
    children?: React.ReactNode;
    animation?: AnimationControls;
    id: number;
    childRef?: any;
}
const SectionLanding = ({ image, children, id }: SectionLandingProps) => {
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
        <motion.section className='h-screen justify-center snap-center' initial={{ opacity: 0.3 }} animate={{ opacity: isInView ? 1 : 0.3 }}
        >
            <div>
                <Flex
                    className='transition-all flex flex-row justify-center align-middle items-center'
                    w={'full'}
                    h={'100vh'}
                    backgroundImage={
                        'url(' + image + ')'
                    }
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                    position={{ base: "absolute" }}
                >
                    <span ref={ref}></span>
                    {children}
                </Flex>
            </div>
            <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
        </motion.section>
    )
}

const LandingPage = () => {
    const iconSize = 20;
    return (
        <>
            <PageTitle title={"tectonica | Baurealisationen"} />
            {/* <Background /> 
            TODO: Remove experiment

            */}
            <Flex flexDirection="column">
                <NavBar />
                <SectionLanding image={''} id={4} key={4}>
                    <div id="filter" className='bg-black/40 w-full h-full absolute z-10'></div>
                    <video muted loop autoPlay className='h-screen w-full object-cover z-0 fixed snap-center'>
                        <source src="/video/construction-site01.mp4" type="video/mp4" />
                    </video>
                    <div className='z-10 '>
                        <h1 className='text-[8em] z-10 text-accent'>
                            tectonica
                        </h1>
                        <Text
                            className='z-10 p-20'
                            color={'white'}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                        >
                            können wir das schaffen?
                            Yo wir schaffen das!
                        </Text>
                    </div>
                </SectionLanding>
                <SectionLanding image={imageUrls[2]} id={2} key={2} >
                    <div id="filter" className='bg-black/40 w-full h-full absolute z-0 hidden'></div>
                    <div className='bg-black/0 flex gap-16 flex-col rounded-lg  p-10 m-5 w-full transition-all'>
                        <h2 className='text-[8rem] text-white font-semibold self-center'>
                            Vision
                        </h2>

                        <div className="flex gap-16 sm:flex-row flex-col justify-start w-full" >
                            <Feature
                                icon={<Icon as={FcAssistant} w={iconSize} h={iconSize} />}
                                title={'Augenhöhe (Rhigetti Partner)'}
                                text='Unsere Vision für eine erfolgreiche Baufirma ist es, immer auf Augenhöhe mit unseren Partnern und Kunden zu agieren. Wir schätzen eine offene und transparente Kommunikation, bei der wir gemeinsam nach Lösungen suchen und die Bedürfnisse unserer Kunden im Fokus haben.'
                            />
                            <Feature
                                icon={<Icon as={FcDonate} w={iconSize} h={iconSize} />}
                                title={'Denken auch ausserhalb des normalen Rahmens'}
                                text='Wir denken auch ausserhalb des normalen Rahmens und bringen neue und innovative Ideen in den Bauprozess ein. Dabei legen wir besonderen Wert auf Nachhaltigkeit und effiziente Arbeitsabläufe.'
                            />
                            <Feature
                                icon={<Icon as={FcInTransit} w={iconSize} h={iconSize} />}
                                title={'Den Ernst in die Sache investieren nicht in die Person'}
                                text='Unsere Vision ist es, als führende Baufirma anerkannt zu werden, die für ihre exzellenten Leistungen, ihre innovativen Lösungen und ihre integre Arbeitsweise bekannt ist. Wir möchten eine positive Veränderung in der Baubranche bewirken und zeigen, dass es möglich ist, erfolgreich zu sein und gleichzeitig Verantwortung für unsere Umwelt und Gesellschaft zu übernehmen.'
                            />
                        </div>
                        <div
                            style={{
                                background: 'linear-gradient(125deg, rgba(0,123,132,.2) 0%, rgba(0,0,0,.2) 100%);'
                            }}
                            className='t-gradient p-4 rounded-xl text-xl text-white font-bold backdrop-blur-xl hover:scale-110 transition-all mx-[41%] text-center  shadow-xl'>
                            Kontakt
                        </div>
                    </div>
                </SectionLanding>
                <>
                    {[0, 1].map((id) => (
                        <SectionLanding image={imageUrls[id]} id={id} key={id} />
                    ))}
                </>



                <Footer />
            </Flex>
        </>
    );
}

export default LandingPage;