import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-0 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>Guidance and Tools</button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
                        Manage Your ADHD <br /> with Dr.Branda
                        </h1>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <p className='text-xl lg:text-xl font-bold text-darkpurple'>
                        Find out if you have ADHD, learn effective management techniques, and explore a variety of treatment options tailored to your needs
                        </p>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                        Start Your Journey
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-0 lg:-pt-1 lg:-translate-y-20 hidden lg:block'>
                    <Image src="/images/banner/Object.png" alt="hero-image" width={700} height={542} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
