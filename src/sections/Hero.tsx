import Router from 'next/router';

const Hero = () => {
    return (
        <div className="hero min-h-screen w-full justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse backdrop-blur-xl shadow-lg bg-black/40 transition-all text-white rounded-xl w-full my-60">
                <div>
                    <h1 className="text-5xl font-bold text-white">tectonica thomas loetscher partner GmbH</h1>
                    <p className="py-6 text-3xl">Wir sind Bauleitung.</p>
                    <button
                        className="btn btn-outline bg-transparent text-white hover:text-teal-600 hover:border-teal-600 hover:bg-transparent"
                        onClick={() => Router.push("/dienstleistungen")}>Mehr erfahren</button>
                    <div
                        className="w-full translate-y-1/2 bg-blue-400 shadow-lg translate-x-0sition-all sm:w-full sm:translate-x-1/2 2xl:translate-x-1/4 sm:translate-y-0 h-2/5 sm:h-4/5 rounded-xl sm:hover:scale-105"
                    >
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Hero;
