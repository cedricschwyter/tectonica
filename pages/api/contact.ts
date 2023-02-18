import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, subject, message } = req.body;
    const msgTectonica = {
        to: process.env.COMPANY_CONTACT_EMAIL!,
        from: email,
        replyTo: email,
        subject,
        text: message
    };
    const msgCustomer = {
        to: email,
        from: process.env.COMPANY_NOREPLY_EMAIL!,
        subject: `[Tectonica GmbH] Kontaktanfrage erhalten - ${subject}`,
        text: `Wir haben Ihre Kontaktanfrage erhalten und werden auf Sie zukommen.\n\n
            Betreff: "${subject}"\n
            Mitteilung: "${message}"`
    }

    try {
        await sendgrid.send(msgTectonica);
        await sendgrid.send(msgCustomer);
        res.json({ message: 'email has been sent' });
    } catch (e) {
        res.status(500).json({ error: 'error sending email' });
    }
};
