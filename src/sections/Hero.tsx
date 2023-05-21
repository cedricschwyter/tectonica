import Router from 'next/router';

const Hero = () => {
    return (
        <div className="hero min-h-screen w-full justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse backdrop-blur-xl shadow-lg bg-black/40 transition-all text-white rounded-xl w-full my-60">
                <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">tectonica Baurealisationen GmbH</h1>
                    <p className="py-6 text-3xl">Wir sind Bauleitung.</p>
                    <button
                        className="btn btn-outline bg-transparent text-white hover:text-teal-600 hover:border-teal-600 hover:bg-transparent"
                        onClick={() => Router.push("/dienstleistungen")}>Mehr erfahren</button>
                </div>
            </div>
        </div >
    );
}

export default Hero;
