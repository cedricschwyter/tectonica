import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, subject, message } = req.body;
    const msg = {
        to: process.env.COMPANY_CONTACT_EMAIL!,
        from: email,
        subject,
        text: message
    };

    try {
        await sendgrid.send(msg);
        res.json({ message: 'email has been sent' });
    } catch (e) {
        res.status(500).json({ error: 'error sending email' });
    }
};
