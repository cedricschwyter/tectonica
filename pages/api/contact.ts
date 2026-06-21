import { NextApiRequest, NextApiResponse } from 'next';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMails = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, subject, message } = req.body;
    const msgTectonica = {
        to: process.env.COMPANY_CONTACT_EMAIL!,
        from: process.env.COMPANY_NOREPLY_EMAIL!,
        replyTo: email,
        subject: `[tectonica.ch Kontaktanfrage] ${subject} - von ${email}`,
        text: message
    };
    const msgCustomer = {
        to: email,
        from: process.env.COMPANY_NOREPLY_EMAIL!,
        subject: `[tectonica.ch] Kontaktanfrage erhalten - ${subject}`,
        text: `Wir haben Ihre Kontaktanfrage erhalten und werden auf Sie zukommen.\n\nBetreff: "${subject}"\nMitteilung: "${message}"`
    }

    try {
        await resend.emails.send(msgTectonica);
        await resend.emails.send(msgCustomer);
        res.json({ message: 'email has been sent' });
    } catch (e) {
        res.status(500).json({ error: 'error sending email' });
    }
};

export default sendMails;
