import GMap from "@components/GMap";
import PageTitle from "@components/PageTitle";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const Kontakt = () => {
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form)
        const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
        console.log(formJson);
        await fetch("/api/contact", {
            method: form.method,
            headers: { "content-type": "application/json" },
            body: formJson
        });
    };

    return (
        <>
            <PageTitle title={"tectonica | Kontakt"} />
            <div className="grid w-full h-screen grid-cols-12 grid-rows-6 shadow-lg" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1553946550-4b8f3eea5451?ixlib=rb-4.0.3&ix)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

                <div className="flex flex-col items-center justify-end h-full col-span-10 col-start-2 grid-rows-6 row-span-4 row-start-2 shadow-lg sm:flex-row sm:col-span-8 sm:col-start-2 rounded-xl bg-black/25 backdrop-blur-md">
                    <div className="flex flex-col w-full sm:translate-x-1/3 sm:translate-y-0 translate-y-1/4 rounded-2xl">
                        <div className="m-4 text-4xl font-bold text-center text-white grow">
                            Kontakt
                        </div>
                        <form className="flex flex-col items-center w-full h-full gap-2 " method='post' onSubmit={handleSubmit}>
                            <input type="email" placeholder="E-Mail Adrese" id="email" name="email" className="w-full max-w-xs input input-ghost " />
                            <input type="text" placeholder="Betreff" id="subject" name="subject" className="w-full max-w-xs input input-ghost " />
                            <textarea placeholder="Nachricht" id="message" name="message" className="w-full max-w-xs textarea input-ghost " />
                            <input type="submit" value="Submit" className="w-full max-w-xs text-gray-300 btn btn-outline" />
                        </form>
                    </div>
                    <div id='map' className="w-11/12 transition-all translate-y-1/2 bg-blue-400 shadow-lg sm:w-full sm:translate-x-1/2 sm:translate-y-0 h-2/5 sm:h-4/5 rounded-xl hover:scale-105">
                        <GMap />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Kontakt;
