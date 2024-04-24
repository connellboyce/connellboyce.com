import { Resend } from 'resend';
import {NextRequest} from "next/server";
import {ContactEmailTemplate} from "@/app/components/templates/contact-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
let originEmail= process.env.ORIGIN_EMAIL;

export async function POST(req: NextRequest) {
    const reqBody = await req.json();
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['connellboyce17@gmail.com'],
            subject: 'Message from: ' + reqBody.name,
            react: ContactEmailTemplate({ name: reqBody.name, email: reqBody.email, subject: reqBody.subject, message: reqBody.message }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}