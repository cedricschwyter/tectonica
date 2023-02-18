import PageTitle from "@components/PageTitle";

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
            <div>
                Kontakt
            </div>
            <form className="mt-96" method='post' onSubmit={handleSubmit}>
                <input type="email" id="email" name="email" /><br />
                <input type="text" id="subject" name="subject" /><br />
                <input type="text" id="message" name="message" /><br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Kontakt;
