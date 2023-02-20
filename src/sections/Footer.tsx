import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-10 rounded footer footer-center bg-base-200 text-base-content">
            <div className="grid grid-flow-col gap-4">
                <Link className="link link-hover" href="/dienstleistungen">Dienstleistungen</Link>
                <Link className="link link-hover" href="/aktuelles">Aktuelles</Link>
                <Link className="link link-hover" href="/kontakt">Kontakt</Link>
            </div>
            <div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Tectonica GmbH</p>
            </div>
        </footer>
    );
}
