import GMap from "@components/GMap";
import PageTitle from "@components/PageTitle";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState } from "react";


const Kontakt = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form)
        const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
        let res = await fetch("/api/contact", {
            method: form.method,
            headers: { "content-type": "application/json" },
            body: formJson
        });
        if (res.status == 200) {
            setSuccess(true);
            setTimeout(() => setSuccess(false), 10000);
            e.target.reset();
        } else {
            setError(true);
            setTimeout(() => setError(false), 10000);
        }
    };

    return (
        <>
            <PageTitle title={"tectonica | Kontakt"} />
            <div className="grid w-full min-h-screen grid-cols-12 grid-rows-6 shadow-lg" style={{
                backgroundImage: 'url(https://unsplash.com/photos/8KfCR12oeUM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc2ODAxMzU1&force=true&w=2400)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                }}>

                <div className="flex flex-col items-center justify-end h-full grid-rows-6 row-span-5 row-start-1 shadow-lg sm:row-start-2 sm:col-span-8 col-span-full sm:col-start-2 sm:row-span-4 sm:flex-row lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-4 rounded-xl bg-black/25 backdrop-blur-md">
                    <div className="flex flex-col w-full m-1 sm:translate-x-1/3 sm:translate-y-0 translate-y-1/4 2xl:translate-x-[16.666667%] rounded-2xl sm:m-0">
                        <div className="m-4 text-4xl font-bold text-center text-white grow">
                            Kontakt
                        </div>
                        <form className="flex flex-col items-center w-full h-full gap-2 text-white" method='post' onSubmit={handleSubmit} id="contact-form">
                            <input type="email" placeholder="E-Mail Adrese" id="email" name="email" className="w-full max-w-xs input input-ghost " />
                            <input type="text" placeholder="Betreff" id="subject" name="subject" className="w-full max-w-xs input input-ghost " />
                            <textarea placeholder="Nachricht" id="message" name="message" className="w-full max-w-xs textarea input-ghost " />
                            <input type="submit" value="Submit" className="w-full max-w-xs text-gray-300 btn btn-outline" />
                        </form>
                        <div className="toast toast-center">
                            {success &&
                            <div className="alert alert-success">
                                <div>
                                    <span>Nachricht erhalten.</span>
                                </div>
                            </div>
                            }
                            {error &&
                                <div className="alert alert-error">
                                    <div>
                                        <span>Unbekannter Fehler.</span>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div id='map' className="w-full translate-y-1/2 bg-blue-400 shadow-lg translate-x-0sition-all sm:w-full sm:translate-x-1/2 2xl:translate-x-1/4 sm:translate-y-0 h-2/5 sm:h-4/5 rounded-xl sm:hover:scale-105">
                        <GMap />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Kontakt;
