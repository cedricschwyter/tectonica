import GMap from "@components/GMap";
import PageTitle from "@components/PageTitle";
import { useState } from "react";

const Kontakt = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
        let res = await fetch("/api/contact", {
            method: form.method,
            headers: { "content-type": "application/json" },
            body: formJson,
        });
        if (res.status == 200) {
            e.target.reset();
            setSuccess(true);
        } else {
            e.target.reset();
            setError(true);
        }
    };

    let Form = () => {
        return (
            <>
                <form
                    className="flex flex-col items-center w-full h-full gap-2 text-white"
                    method="post"
                    onSubmit={handleSubmit}
                    id="contact-form"
                >
                    <input
                        type="email"
                        placeholder="E-Mail Adresse"
                        id="email"
                        name="email"
                        className="w-full max-w-xs input input-ghost "
                    />
                    <input
                        type="text"
                        placeholder="Betreff"
                        id="subject"
                        name="subject"
                        className="w-full max-w-xs input input-ghost "
                    />
                    <textarea
                        placeholder="Nachricht"
                        id="message"
                        name="message"
                        className="w-full max-w-xs textarea input-ghost "
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-outline w-full max-w-xs bg-transparent text-white hover:text-teal-600 hover:border-teal-600 hover:bg-transparent"
                    />
                </form>
                <div className="flex flex-col text-white items-center">
                    <div className="m-4 text-2xl font-bold text-center text-white grow">
                        Anschrift
                    </div>
                    <div>tectonica GmbH</div>
                    <div>Vogelaustrasse 46</div>
                    <div>8953 Dietikon</div>
                    <div>
                        E-Mail:{" "}
                        <a href="mailto:info@tectonica-bau.ch">info@tectonica-bau.ch</a>
                    </div>
                </div>
            </>
        );
    };

    let ThankYou = () => {
        return (
            <div className="m-4 text-2xl text-center text-white grow">
                Danke! Ihre Anfrage wird von uns bearbeitet.
            </div>
        );
    };

    let FormError = () => {
        return (
            <div className="m-4 text-2xl text-center text-white grow">
                Ein unbekannter Fehler ist aufgetreten. Bitte kontaktieren Sie uns
                direkt unter{" "}
                <a href="mailto:info@tectonica-bau.ch">info@tectonica-bau.ch</a>.
            </div>
        );
    };

    let FormThankYouError = Form;
    if (success) {
        FormThankYouError = ThankYou;
    }
    if (error) {
        FormThankYouError = FormError;
    }

    return (
        <>
            <PageTitle title={"tectonica | Kontakt"} />
            <div className="grid w-full min-h-screen grid-cols-12 grid-rows-6 shadow-lg">
                <div className="flex flex-col items-center justify-end h-full grid-rows-6 row-span-5 row-start-1 shadow-lg sm:row-start-2 sm:col-span-8 col-span-full sm:col-start-2 sm:row-span-4 sm:flex-row lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-4 rounded-xl bg-black/25 backdrop-blur-md">
                    <div className="flex flex-col w-full m-1 sm:translate-x-1/3 sm:translate-y-0 translate-y-1/4 2xl:translate-x-[16.666667%] rounded-2xl sm:m-0">
                        <div className="m-4 text-4xl font-bold text-center text-white grow">
                            Kontakt
                        </div>
                        <FormThankYouError />
                    </div>
                    <div
                        id="map"
                        className="w-full translate-y-1/2 bg-blue-400 shadow-lg translate-x-0sition-all sm:w-full sm:translate-x-1/2 2xl:translate-x-1/4 sm:translate-y-0 h-2/5 sm:h-4/5 rounded-xl sm:hover:scale-105"
                    >
                        <GMap />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Kontakt;
