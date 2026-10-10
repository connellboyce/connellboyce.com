import { Resend } from 'resend';
import {NextRequest} from "next/server";
import {ContactEmailTemplate} from "@/app/components/templates/contact-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
let originEmail= process.env.ORIGIN_EMAIL;

export async function POST(req: NextRequest) {
    const reqBody = await req.json();
    try {
        const { data, error } = await resend.emails.send({
            from: 'contact@connellboyce.com',
            to: ['connellboyce17@gmail.com'],
            subject: 'Message from: ' + reqBody.name,
            react: ContactEmailTemplate({ name: reqBody.name, email: reqBody.email, subject: reqBody.subject, message: reqBody.message }),
        });

        if (error) {
            console.error('Resend rejected the email:', error);
            return Response.json({ error: error.message }, { status: 502 });
        }

        return Response.json(data);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error sending email';
        console.error('Unexpected error sending email:', error);
        return Response.json({ error: message }, { status: 500 });
    }
}