import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "ADHD Experts Podcast.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'This podcast offers expert advice and research-based strategies to manage ADHD. Episodes cover topics like coping with executive function challenges.',
        link: 'Listen Now'
    },
    {
        heading: "Pomodoro Technique for Focus.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'The Pomodoro Technique involves working in short bursts (typically 25 minutes) with a 5-minute break in between.After four cycles, take a longer break',
        link: 'Read more'
    },
    {
        heading: "Mindful Breathing.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Practicing mindful breathing for just a few minutes daily can help with impulse control and reduce stress. Sit comfortably, close your eyes, and focus on taking slow, deep breaths.',
        link: 'Read more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section"  className='lg:-translate-y-40'>
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-[#DEE9FF] rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>TOOLS</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Explore  different tools</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;