import PageTitle from "@components/PageTitle";

const Kontakt = () => {
    const onSubmit = async (e: any) => {
        e.preventDefault();
        await fetch("/api/contact", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                email: e.target[0],
                subject: e.target[1],
                message: e.target[2]
            })
        });
    };

    return (
        <>
            <PageTitle title={"tectonica | Kontakt"} />
            <div>
                Kontakt
            </div>
            <form>
                <input type="text" id="email" name="email" /><br />
                <input type="text" id="subject" name="subject" /><br />
                <input type="text" id="message" name="message" /><br />
                <input type="submit" value="Submit" onSubmit={onSubmit}/>
            </form>
        </>
    );
}

export default Kontakt;
