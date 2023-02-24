import { ReactElement } from 'react'
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
                background: 'linear-gradient(125deg, rgba(0,123,132,.3) 0%, rgba(0,0,0,.7) 100%)'
            }}
            className='text-white group min-w-[330px] w-full backdrop-blur-xl rounded-xl gap-3 p-4 pt-8 shadow-xl flex justify-start justify-items-start hover:shadow-xl transition-all flex-col'>
            <div className='z-10 flex flex-col w-full h-full gap-5 justify-left justify-items-start'>
                <span className='flex text-[10rem] justify-center'>
                    {icon}
                </span>
                <h2 className='text-xl font-semibold text-center md:text-3xl'>{title}</h2>
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
            <div id="filter" className='absolute z-0 w-full h-full bg-black/30'></div>
            <div className='z-10 flex flex-col w-full gap-12 p-5 transition-all rounded-lg bg-black/0 lg:gap-16 md:p-10 md:m-5'>
                <h2 className='self-center font-semibold text-white lg:text-9xl text-8xl'>
                    Vision
                </h2>

                <div className="flex flex-row justify-start w-full gap-8 p-10 lg:gap-16 rounded-xl" >
                    <FeatureCard
                        icon={<FcAssistant width={iconSize} height={iconSize} />}
                        title={'Augenhöhe (Rhigetti Partner)'}
                        text='Unsere Vision für eine erfolgreiche Baufirma ist es, immer auf Augenhöhe mit unseren Partnern und Kunden zu agieren. Wir schätzen eine offene und transparente Kommunikation, bei der wir gemeinsam nach Lösungen suchen und die Bedürfnisse unserer Kunden im Fokus haben.'
                    />
                    <FeatureCard
                        icon={<FcDonate width={iconSize} height={iconSize} />}
                        title={'Denken auch ausserhalb des normalen Rahmens'}
                        text='Wir denken auch ausserhalb des normalen Rahmens und bringen neue und innovative Ideen in den Bauprozess ein. Dabei legen wir besonderen Wert auf Nachhaltigkeit und effiziente Arbeitsabläufe.'
                    />
                    <FeatureCard
                        icon={<FcInTransit width={iconSize} height={iconSize} />}
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

