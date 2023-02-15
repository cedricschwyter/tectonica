import { ReactElement } from 'react'
import { Icon } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
    title: string;
    icon: ReactElement;
    text: string;
}
const FeatureCard = ({ title, icon, text }: FeatureProps) => {
    return (
        <div
            style={{
                background: 'linear-gradient(125deg, rgba(0,123,132,.3) 0%, rgba(0,0,0,.7) 100%);'
            }}
            className='group min-w-[330px] w-full backdrop-blur-xl rounded-xl gap-3 p-4 pt-8 shadow-xl flex justify-start justify-items-start hover:shadow-xl transition-all flex-col'>
            <div className='flex justify-left gap-5 justify-items-start flex-col h-full w-full z-10'>
                <span className='flex text-[12rem] justify-center'>
                    {icon}
                </span>
                <h2 className='text-white text-center text-xl md:text-3xl font-semibold'>{title}</h2>
                <p className='p-3 md:text-xl'>
                    {text}
                </p>
            </div>
        </div>
    );
};

export const Vision = () => {
    const iconSize = 20;

    return (
        <>
            <div id="filter" className='bg-black/30 w-full h-full absolute z-0'></div>
            <div className='z-10 bg-black/0 flex gap-12 lg:gap-16 flex-col rounded-lg md:p-10 p-5 md:m-5 w-full  transition-all'>
                <h2 className='lg:text-9xl text-8xl text-white font-semibold self-center'>
                    Vision
                </h2>

                <div className="flex gap-8 lg:gap-16 flex-row justify-start w-full p-10 overflow-y-hidden overflow-x-auto rounded-xl" >
                    <FeatureCard
                        icon={<Icon as={FcAssistant} w={iconSize} h={iconSize} />}
                        title={'Augenhöhe (Rhigetti Partner)'}
                        text='Unsere Vision für eine erfolgreiche Baufirma ist es, immer auf Augenhöhe mit unseren Partnern und Kunden zu agieren. Wir schätzen eine offene und transparente Kommunikation, bei der wir gemeinsam nach Lösungen suchen und die Bedürfnisse unserer Kunden im Fokus haben.'
                    />
                    <FeatureCard
                        icon={<Icon as={FcDonate} w={iconSize} h={iconSize} />}
                        title={'Denken auch ausserhalb des normalen Rahmens'}
                        text='Wir denken auch ausserhalb des normalen Rahmens und bringen neue und innovative Ideen in den Bauprozess ein. Dabei legen wir besonderen Wert auf Nachhaltigkeit und effiziente Arbeitsabläufe.'
                    />
                    <FeatureCard
                        icon={<Icon as={FcInTransit} w={iconSize} h={iconSize} />}
                        title={'Den Ernst in die Sache investieren nicht in die Person'}
                        text='Unsere Vision ist es, als führende Baufirma anerkannt zu werden, die für ihre exzellenten Leistungen, ihre innovativen Lösungen und ihre integre Arbeitsweise bekannt ist. Wir möchten eine positive Veränderung in der Baubranche bewirken und zeigen, dass es möglich ist, erfolgreich zu sein und gleichzeitig Verantwortung für unsere Umwelt und Gesellschaft zu übernehmen.'
                    />
                </div>
                <div
                    style={{
                        background: 'linear-gradient(125deg, rgba(0,123,132,.2) 0%, rgba(0,0,0,.2) 100%);'
                    }}
                    className='t-gradient p-4 rounded-xl text-xl text-white font-bold backdrop-blur-xl hover:scale-110 transition-all md:mx-[41%] text-center  shadow-xl'>
                    Kontakt
                </div>
            </div>
        </>
    )
}

export default Vision;

